import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoadAccident } from '../../roadAccidents/entities/roadAccident.entity';
import {
  ControlType,
  Country,
  CoverType,
  EngineType,
  OwnershipForm,
  SteeringWheelPosition,
  TireType,
  TypeOfDrive,
  VehicleCategory,
  VehicleType,
} from '../../dictionaries/entities/dictionaries.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => VehicleType, {
    nullable: false,
  })
  vehicleType: VehicleType;

  @ManyToOne(() => VehicleCategory, {
    nullable: false,
  })
  vehicleCategory: VehicleCategory;

  @ManyToOne(() => SteeringWheelPosition, {
    nullable: false,
  })
  steeringWheelPosition: SteeringWheelPosition;

  @ManyToOne(() => TypeOfDrive, {
    nullable: false,
  })
  typeOfDrive: TypeOfDrive;

  @ManyToOne(() => ControlType, {
    nullable: false,
  })
  controlType: ControlType;

  @ManyToOne(() => EngineType, {
    nullable: false,
  })
  engineType: EngineType;

  @ManyToOne(() => TireType, {
    nullable: false,
  })
  tireType: TireType;

  @Column({ type: 'text', nullable: false })
  color: string;

  @Column({ type: 'text', nullable: false })
  yearOfIssue: string;

  @Column({ type: 'text', nullable: false })
  weightWithoutLoad: string;

  @Column({ type: 'text', nullable: false })
  weightMaxPermitted: string;

  @Column({ type: 'text', nullable: false })
  odometerStatus: string;

  @Column({ type: 'real', nullable: false })
  mileage: number;

  @Column({ type: 'text', nullable: false })
  motorPower: string;

  @Column({ type: 'real', nullable: false })
  maxSpeed: number;

  @Column({ type: 'real', nullable: false })
  passengerCapacity: number;

  @Column({ type: 'text', nullable: false })
  carBrand: string;

  @Column({ type: 'text', nullable: false })
  carModel: string;

  @ManyToOne(() => Country, {
    nullable: false,
  })
  manufacturerCountry: Country;

  @ManyToOne(() => Country, {
    nullable: false,
  })
  registrationCountry: Country;

  @Column({ type: 'text', nullable: false })
  VIN: string;

  @Column({ type: 'text', nullable: false })
  chassisNumber: string;

  @Column({ type: 'text', nullable: false })
  vehicleBodyNumber: string;

  @Column({ type: 'text', nullable: false })
  engineNumber: string;

  @Column({ type: 'text', nullable: false })
  stateRegistrationPlate: string;

  @Column({ type: 'text', nullable: false })
  registrationCertificateNumber: string;

  @Column({ type: 'text', nullable: false })
  technicalFaults: string;

  @Column({ type: 'text', nullable: false })
  additionalEquipment: string;

  @Column({ type: 'text', nullable: false })
  tachographUsageDetails: string;

  @Column({ type: 'text', nullable: false })
  vehicleDamage: string;

  @Column({ type: 'text', nullable: false })
  contourMarking: string;

  @Column({ type: 'boolean', nullable: false })
  isCargoDangerous: boolean;

  @Column({ type: 'boolean', nullable: false })
  isLicenseAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isInsurancePolicyAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isSelfBalancingMechanism: boolean;

  @Column({ type: 'boolean', nullable: false })
  isDriverLeft: boolean;

  @Column({ type: 'boolean', nullable: false })
  isDriverWanted: boolean;

  @Column({ type: 'text', nullable: false })
  usageReason: string;

  @Column({ type: 'text', nullable: false })
  transportationCharacteristics: string;

  @Column({ type: 'text', nullable: false })
  transportationOrganizationMeasures: string;

  @Column({ type: 'text', nullable: false })
  organization: string;

  @Column({ type: 'text', nullable: false })
  INN: string;

  @Column({ type: 'text', nullable: false })
  legalForm: string;

  @ManyToOne(() => OwnershipForm, {
    nullable: false,
  })
  ownershipForm: OwnershipForm;

  @Column({ type: 'text', nullable: false })
  registrationAddress: string;

  @ManyToOne(() => RoadAccident, (roadAccident) => roadAccident.accidentCars, {
    nullable: false,
  })
  roadAccident: RoadAccident;
}
