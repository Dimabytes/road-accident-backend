import { User } from '../../modules/users/entities/user.entity';
import { Car } from '../../modules/cars/entities/car.entity';
import { RoadAccident } from '../../modules/roadAccidents/entities/roadAccident.entity';
import { AccidentParticipant } from '../../modules/accidentParticipants/entities/accidentParticipant.entity';
import * as AllDictionaries from '../../modules/dictionaries/entities/dictionaries.entity';
const { Dictionary: _, ...Dictionaries } = AllDictionaries;

export default [
  User,
  Car,
  RoadAccident,
  AccidentParticipant,
  ...Object.values(Dictionaries),
];
