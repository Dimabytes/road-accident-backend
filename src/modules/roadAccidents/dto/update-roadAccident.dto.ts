import { PartialType, OmitType } from '@nestjs/swagger';
import {
  CreateAccidentParticipantDto,
  CreateCarDto,
  CreateRoadAccidentDto,
} from './create-roadAccident.dto';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';

export class UpdateRoadAccidentDto extends OmitType(
  PartialType(CreateRoadAccidentDto),
  ['accidentCars', 'accidentParticipants'],
) {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  accidentParticipants: Partial<CreateAccidentParticipantDto>[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  accidentCars: Partial<CreateCarDto>[];
}
