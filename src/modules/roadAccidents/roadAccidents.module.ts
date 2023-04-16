import { Module } from '@nestjs/common';
import { RoadAccidentsController } from './roadAccidents.controller';

@Module({
  controllers: [RoadAccidentsController],
  providers: [],
})
export class RoadAccidentsModule {}
