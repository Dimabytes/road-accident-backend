import { Between, Repository } from 'typeorm';
import { getAppDataSource } from '../../orm/dataSource';
import { RoadAccident } from './entities/roadAccident.entity';
import { Car } from '../cars/entities/car.entity';
import { AccidentParticipant } from '../accidentParticipants/entities/accidentParticipant.entity';
import { CreateRoadAccidentDto } from './dto/create-roadAccident.dto';
import { UpdateRoadAccidentDto } from './dto/update-roadAccident.dto';
import { FindRoadAccidentFilterDto } from './dto/find-roadAccident-filter.dto';
import { getOptionalDateWhere } from '../../utils/getOptionalDateWhere';

type Repositories = {
  roadAccidentRepository: Repository<RoadAccident>;
  carRepository: Repository<Car>;
  accidentParticipantRepository: Repository<AccidentParticipant>;
};

export class RoadAccidentsDao {
  private repositories: Repositories;
  private constructor(repositories: Repositories) {
    this.repositories = repositories;
  }

  public static async getDAO(): Promise<RoadAccidentsDao> {
    const dataSource = await getAppDataSource();
    return new RoadAccidentsDao({
      roadAccidentRepository: dataSource.getRepository(RoadAccident),
      carRepository: dataSource.getRepository(Car),
      accidentParticipantRepository:
        dataSource.getRepository(AccidentParticipant),
    });
  }

  public async update(
    id: string,
    data: UpdateRoadAccidentDto,
  ): Promise<RoadAccident> {
    const { accidentCars, accidentParticipants } = data;

    if (accidentCars) {
      const ids = accidentCars
        .filter((el) => Boolean(el.id))
        .map((el) => el.id);

      await this.repositories.carRepository
        .createQueryBuilder()
        .delete()
        .where('roadAccidentId = :id', { id })
        .andWhere('id NOT IN (:...ids)', { ids: ids })
        .execute();
    }

    if (accidentParticipants) {
      const ids = accidentParticipants
        .filter((el) => Boolean(el.id))
        .map((el) => el.id);

      await this.repositories.accidentParticipantRepository
        .createQueryBuilder()
        .delete()
        .where('roadAccidentId = :id', { id })
        .andWhere('id NOT IN (:...ids)', { ids: ids })
        .execute();
    }
    await this.repositories.roadAccidentRepository.save({ ...data, id });

    return this.repositories.roadAccidentRepository.findOne({
      where: { id },
      relations: {
        trafficPoliceOfficer: true,
        accidentCars: true,
        accidentParticipants: true,
      },
    });
  }

  public async create(
    data: CreateRoadAccidentDto,
    creatorId: string,
  ): Promise<RoadAccident> {
    return await this.repositories.roadAccidentRepository.save({
      ...data,
      trafficPoliceOfficer: {
        id: creatorId,
      },
    });
  }

  public async findAll(): Promise<RoadAccident[]> {
    return this.repositories.roadAccidentRepository.find({
      relations: {
        trafficPoliceOfficer: true,
        accidentCars: true,
        accidentParticipants: true,
      },
    });
  }

  public async findAllByFilter(
    filter: FindRoadAccidentFilterDto,
  ): Promise<RoadAccident[]> {
    console.log(filter);
    return this.repositories.roadAccidentRepository.find({
      relations: {
        trafficPoliceOfficer: true,
        accidentCars: true,
        accidentParticipants: true,
      },
      where: {
        accidentType: filter.accidentType && {
          id: filter.accidentType,
        },
        trafficPoliceOfficer: filter.trafficPoliceOfficerId && {
          id: filter.trafficPoliceOfficerId,
        },
        accidentDatetime: getOptionalDateWhere(
          filter.accidentDatetimeStart,
          filter.accidentDatetimeEnd,
        ),
      },
    });
  }

  public async findById(id: string): Promise<RoadAccident> {
    return this.repositories.roadAccidentRepository.findOne({
      where: { id },
      relations: {
        trafficPoliceOfficer: true,
        accidentCars: true,
        accidentParticipants: true,
      },
    });
  }
}
