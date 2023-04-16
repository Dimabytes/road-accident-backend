import { IsDate, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class FindRoadAccidentFilterDto {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  accidentDatetimeStart?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  accidentDatetimeEnd?: Date;

  @IsOptional()
  @IsString()
  trafficPoliceOfficerId?: string;

  @IsOptional()
  @IsString()
  accidentType?: string;
}
