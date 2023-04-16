import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { AccidentParticipant } from '../../accidentParticipants/entities/accidentParticipant.entity';
import { Car } from '../../cars/entities/car.entity';
import {
  AccidentType,
  CoverType,
  CrossingCategory,
  DividerType,
  HorizontalMarkup,
  RoadCategory,
  SettlementStatus,
  SettlementType,
  StreetCategory,
  TemporaryMarkup,
  VerticalMarkup,
} from '../../dictionaries/entities/dictionaries.entity';

@Entity()
export class RoadAccident {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'datetime', nullable: false })
  accidentDatetime: Date;

  @ManyToOne(() => AccidentType, {
    nullable: false,
    eager: true,
  })
  accidentType: AccidentType;

  @ManyToOne(() => SettlementStatus, {
    nullable: false,
    eager: true,
  })
  settlementStatus: SettlementStatus;

  @ManyToOne(() => SettlementType, {
    nullable: false,
    eager: true,
  })
  settlementType: SettlementType;

  @Column({ type: 'text', nullable: false })
  fullAddress: string;

  @Column({ type: 'real', nullable: false })
  population: number;

  @ManyToOne(() => StreetCategory, {
    nullable: false,
    eager: true,
  })
  streetCategory: StreetCategory;

  @ManyToOne(() => RoadCategory, {
    nullable: false,
    eager: true,
  })
  road: RoadCategory;

  @Column({ type: 'text', nullable: false })
  distance: string;

  @Column({ type: 'real', nullable: false })
  diedNumber: number;

  @Column({ type: 'real', nullable: false })
  injuredNumber: number;

  @Column({ type: 'text', nullable: false })
  accidentDescription: string;

  @Column({ type: 'text', nullable: false })
  scheme: string;

  @Column({ type: 'real', nullable: false })
  numberOfLanes: number;

  @Column({ type: 'real', nullable: false })
  accidentLane: number;

  @Column({ type: 'real', nullable: false })
  roadwayWidth: number;

  @Column({ type: 'real', nullable: false })
  sidewalkWidth: number;

  @Column({ type: 'real', nullable: false })
  dividerWidth: number;

  @Column({ type: 'real', nullable: false })
  roadsideWidth: number;

  @ManyToOne(() => CoverType, {
    nullable: false,
    eager: true,
  })
  coverType: CoverType;

  @ManyToOne(() => DividerType, {
    nullable: false,
    eager: true,
  })
  dividerType: DividerType;

  @Column({ type: 'text', nullable: false })
  permissibleAxialLoad: string;

  @Column({ type: 'real', nullable: false })
  speedLimit: number;

  @Column({ type: 'text', nullable: false })
  roadNetworkObjects: string;

  @Column({ type: 'text', nullable: false })
  nearestEducationalOrganizations: string;

  @ManyToOne(() => HorizontalMarkup, {
    nullable: false,
    eager: true,
  })
  horizontalMarkup: HorizontalMarkup;

  @ManyToOne(() => TemporaryMarkup, {
    nullable: false,
    eager: true,
  })
  temporaryMarkup: TemporaryMarkup;

  @ManyToOne(() => VerticalMarkup, {
    nullable: false,
    eager: true,
  })
  verticalMarkup: VerticalMarkup;

  @Column({ type: 'text', nullable: false })
  crossingName: string;

  @ManyToOne(() => CrossingCategory, {
    nullable: false,
    eager: true,
  })
  crossingCategory: CrossingCategory;

  @Column({ type: 'text', nullable: false })
  serviceOrganization: string;

  @Column({ type: 'text', nullable: false })
  crossingOwner: string;

  @Column({ type: 'boolean', nullable: false })
  isAttendantAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isControlsAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isSpecialTechnicalsAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isBarrierAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isFenceAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isTrafficLightsAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isRoadSignsAvailable: boolean;

  @Column({ type: 'text', nullable: false })
  geographicalCoordinates: string;

  @Column({ type: 'text', nullable: false })
  weatherCondition: string;

  @Column({ type: 'text', nullable: false })
  lighting: string;

  @Column({ type: 'text', nullable: false })
  roadwayCondition: string;

  @Column({ type: 'text', nullable: false })
  transportOperationalStateDisadvantages: string;

  @Column({ type: 'text', nullable: false })
  equippingDisadvantages: string;

  @Column({ type: 'text', nullable: false })
  responseTime: string;

  @Column({ type: 'text', nullable: false })
  inspectorsActions: string;

  @ManyToOne(() => User, (user) => user.roadAccidents, {
    nullable: false,
  })
  trafficPoliceOfficer: User;

  @OneToMany(
    () => AccidentParticipant,
    (accidentParticipant) => accidentParticipant.roadAccident,
    { cascade: true },
  )
  accidentParticipants: AccidentParticipant[];

  @OneToMany(() => Car, (car) => car.roadAccident, { cascade: true })
  accidentCars: Car[];

  @Column({ type: 'time', nullable: false })
  timeOfRegistration: string;
}
