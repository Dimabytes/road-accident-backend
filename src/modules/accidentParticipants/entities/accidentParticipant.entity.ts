import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoadAccident } from '../../roadAccidents/entities/roadAccident.entity';
import { ParticipantCategory } from '../../dictionaries/entities/dictionaries.entity';

@Entity()
export class AccidentParticipant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ParticipantCategory, {
    nullable: false,
  })
  participantCategory: ParticipantCategory;

  @Column({ type: 'text', nullable: false })
  vehicleParticipant: string;

  @Column({ type: 'real', nullable: false })
  drivingExperience: number;

  @Column({ type: 'text', nullable: false })
  drivingTime: string;

  @Column({ type: 'text', nullable: false })
  driverLicense: string;

  @Column({ type: 'text', nullable: false })
  medicalOrderNumber: string;

  @Column({ type: 'text', nullable: false })
  passengerSeatVehicle: string;

  @Column({ type: 'text', nullable: false })
  pedestrianLocation: string;

  @Column({ type: 'text', nullable: false })
  pedestrianDirection: string;

  @Column({ type: 'text', nullable: false })
  inattentiveFactors: string;

  @Column({ type: 'text', nullable: false })
  trafficViolations: string;

  @Column({ type: 'text', nullable: false })
  legalDecision: string;

  @Column({ type: 'text', nullable: false })
  severityConsequencesAccident: string;

  @Column({ type: 'text', nullable: false })
  medicalOrganizationName: string;

  @Column({ type: 'boolean', nullable: false })
  isMedicalOrganizationDelivery: boolean;

  @Column({ type: 'boolean', nullable: false })
  isMedicalAidAccident: boolean;

  @Column({ type: 'boolean', nullable: false })
  isSpecialEquipment: boolean;

  @Column({ type: 'boolean', nullable: false })
  isSeatBeltFastened: boolean;

  @Column({ type: 'boolean', nullable: false })
  isDangerousCargoAdmission: boolean;

  @Column({ type: 'boolean', nullable: false })
  isPassengerFall: boolean;

  @Column({ type: 'boolean', nullable: false })
  isReflectiveElementsAvailable: boolean;

  @Column({ type: 'boolean', nullable: false })
  isChildSeatFastened: boolean;

  @Column({ type: 'boolean', nullable: false })
  isDriverWanted: boolean;

  @Column({ type: 'boolean', nullable: false })
  isDriverDrunk: boolean;

  @Column({ type: 'boolean', nullable: false })
  isParticipantLeftDetected: boolean;

  @Column({ type: 'boolean', nullable: false })
  isAccidentLeft: boolean;

  @ManyToOne(
    () => RoadAccident,
    (roadAccident) => roadAccident.accidentParticipants,
    {
      nullable: false,
    },
  )
  roadAccident: RoadAccident;
}
