import { Repository } from 'typeorm';
import { getAppDataSource } from '../../orm/dataSource';
import {
  AccidentType,
  ControlType,
  CoverType,
  Country,
  DividerType,
  EngineType,
  CrossingCategory,
  ParticipantCategory,
  RoadCategory,
  SettlementType,
  SettlementStatus,
  TireType,
  TypeOfDrive,
  HorizontalMarkup,
  StreetCategory,
  VehicleType,
  VehicleCategory,
  OwnershipForm,
  TemporaryMarkup,
  VerticalMarkup,
  SteeringWheelPosition,
  Dictionary,
} from './entities/dictionaries.entity';

type Repositories = {
  [DictionaryType.accidentType]: Repository<AccidentType>;
  [DictionaryType.controlType]: Repository<ControlType>;
  [DictionaryType.coverType]: Repository<CoverType>;
  [DictionaryType.country]: Repository<Country>;
  [DictionaryType.dividerType]: Repository<DividerType>;
  [DictionaryType.engineType]: Repository<EngineType>;
  [DictionaryType.crossingCategory]: Repository<CrossingCategory>;
  [DictionaryType.participantCategory]: Repository<ParticipantCategory>;
  [DictionaryType.roadCategory]: Repository<RoadCategory>;
  [DictionaryType.settlementType]: Repository<SettlementType>;
  [DictionaryType.settlementStatus]: Repository<SettlementStatus>;
  [DictionaryType.tireType]: Repository<TireType>;
  [DictionaryType.typeOfDrive]: Repository<TypeOfDrive>;
  [DictionaryType.horizontalMarkup]: Repository<HorizontalMarkup>;
  [DictionaryType.streetCategory]: Repository<StreetCategory>;
  [DictionaryType.vehicleType]: Repository<VehicleType>;
  [DictionaryType.vehicleCategory]: Repository<VehicleCategory>;
  [DictionaryType.ownershipForm]: Repository<OwnershipForm>;
  [DictionaryType.temporaryMarkup]: Repository<TemporaryMarkup>;
  [DictionaryType.verticalMarkup]: Repository<VerticalMarkup>;
  [DictionaryType.steeringWheelPosition]: Repository<SteeringWheelPosition>;
};

export enum DictionaryType {
  accidentType = 'AccidentType',
  controlType = 'ControlType',
  coverType = 'CoverType',
  country = 'Country',
  dividerType = 'DividerType',
  engineType = 'EngineType',
  crossingCategory = 'CrossingCategory',
  participantCategory = 'ParticipantCategory',
  roadCategory = 'RoadCategory',
  settlementType = 'SettlementType',
  settlementStatus = 'SettlementStatus',
  tireType = 'TireType',
  typeOfDrive = 'TypeOfDrive',
  horizontalMarkup = 'HorizontalMarkup',
  streetCategory = 'StreetCategory',
  vehicleType = 'VehicleType',
  vehicleCategory = 'VehicleCategory',
  ownershipForm = 'OwnershipForm',
  temporaryMarkup = 'TemporaryMarkup',
  verticalMarkup = 'VerticalMarkup',
  steeringWheelPosition = 'SteeringWheelPosition',
}

export class DictionariesDao {
  private dictionaries: Repositories;
  private constructor(dictionaries: Repositories) {
    this.dictionaries = dictionaries;
  }

  public static async getDAO(): Promise<DictionariesDao> {
    const dataSource = await getAppDataSource();
    return new DictionariesDao({
      [DictionaryType.accidentType]: dataSource.getRepository(AccidentType),
      [DictionaryType.controlType]: dataSource.getRepository(ControlType),
      [DictionaryType.coverType]: dataSource.getRepository(CoverType),
      [DictionaryType.country]: dataSource.getRepository(Country),
      [DictionaryType.dividerType]: dataSource.getRepository(DividerType),
      [DictionaryType.engineType]: dataSource.getRepository(EngineType),
      [DictionaryType.crossingCategory]:
        dataSource.getRepository(CrossingCategory),
      [DictionaryType.participantCategory]:
        dataSource.getRepository(ParticipantCategory),
      [DictionaryType.roadCategory]: dataSource.getRepository(RoadCategory),
      [DictionaryType.settlementType]: dataSource.getRepository(SettlementType),
      [DictionaryType.settlementStatus]:
        dataSource.getRepository(SettlementStatus),
      [DictionaryType.tireType]: dataSource.getRepository(TireType),
      [DictionaryType.typeOfDrive]: dataSource.getRepository(TypeOfDrive),
      [DictionaryType.horizontalMarkup]:
        dataSource.getRepository(HorizontalMarkup),
      [DictionaryType.streetCategory]: dataSource.getRepository(StreetCategory),
      [DictionaryType.vehicleType]: dataSource.getRepository(VehicleType),
      [DictionaryType.vehicleCategory]:
        dataSource.getRepository(VehicleCategory),
      [DictionaryType.ownershipForm]: dataSource.getRepository(OwnershipForm),
      [DictionaryType.temporaryMarkup]:
        dataSource.getRepository(TemporaryMarkup),
      [DictionaryType.verticalMarkup]: dataSource.getRepository(VerticalMarkup),
      [DictionaryType.steeringWheelPosition]: dataSource.getRepository(
        SteeringWheelPosition,
      ),
    });
  }

  public async findAll(dictionary: DictionaryType): Promise<Dictionary[]> {
    return await this.dictionaries[dictionary].find();
  }
}
