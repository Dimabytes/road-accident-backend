import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  OnModuleInit,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { CreateRoadAccidentDto } from './dto/create-roadAccident.dto';
import { UpdateRoadAccidentDto } from './dto/update-roadAccident.dto';
import { RoadAccident } from './entities/roadAccident.entity';
import { RoadAccidentsDao } from './roadAccidents.dao';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { FindRoadAccidentFilterDto } from './dto/find-roadAccident-filter.dto';

@ApiTags('roadAccidents')
@Controller('roadAccidents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class RoadAccidentsController implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    this.roadAccidentDao = await RoadAccidentsDao.getDAO();
  }

  private roadAccidentDao: RoadAccidentsDao;

  @Post()
  create(
    @Body() data: CreateRoadAccidentDto,
    @Request() req,
  ): Promise<RoadAccident> {
    return this.roadAccidentDao.create(data, req.user.id);
  }

  @Get()
  findAll(@Query() data: FindRoadAccidentFilterDto): Promise<RoadAccident[]> {
    return this.roadAccidentDao.findAllByFilter(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RoadAccident> {
    return await this.roadAccidentDao.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRoadAccidentDto,
  ): Promise<RoadAccident> {
    return await this.roadAccidentDao.update(id, data);
  }
}
