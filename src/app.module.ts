import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { RoadAccidentsModule } from './modules/roadAccidents/roadAccidents.module';
import { DictionariesModule } from './modules/dictionaries/dictionaries.module';

@Module({
  controllers: [],
  imports: [AuthModule, RoadAccidentsModule, DictionariesModule],
})
export class AppModule {}
