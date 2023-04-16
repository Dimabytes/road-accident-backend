import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class Dictionary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  label: string;
}
@Entity()
export class AccidentType extends Dictionary {}
@Entity()
export class SettlementType extends Dictionary {}
@Entity()
export class SettlementStatus extends Dictionary {}
@Entity()
export class StreetCategory extends Dictionary {}
@Entity()
export class RoadCategory extends Dictionary {}
@Entity()
export class CoverType extends Dictionary {}
@Entity()
export class DividerType extends Dictionary {}
@Entity()
export class HorizontalMarkup extends Dictionary {}
@Entity()
export class VerticalMarkup extends Dictionary {}
@Entity()
export class TemporaryMarkup extends Dictionary {}
@Entity()
export class CrossingCategory extends Dictionary {}
@Entity()
export class ParticipantCategory extends Dictionary {}
@Entity()
export class SteeringWheelPosition extends Dictionary {}

@Entity()
export class VehicleCategory extends Dictionary {}
@Entity()
export class Country extends Dictionary {}
@Entity()
export class VehicleType extends Dictionary {}
@Entity()
export class OwnershipForm extends Dictionary {}
@Entity()
export class EngineType extends Dictionary {}
@Entity()
export class TireType extends Dictionary {}

@Entity()
export class TypeOfDrive extends Dictionary {}
@Entity()
export class ControlType extends Dictionary {}
