import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IdTypeDto } from '../../../types/IdType.dto';

export class CreateAccidentParticipantDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  participantCategory: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  vehicleParticipant: string;

  @IsNotEmpty()
  @IsNumber()
  drivingExperience: number;

  @IsNotEmpty()
  @IsString()
  drivingTime: string;

  @IsNotEmpty()
  @IsString()
  driverLicense: string;

  @IsNotEmpty()
  @IsString()
  medicalOrderNumber: string;

  @IsNotEmpty()
  @IsString()
  passengerSeatVehicle: string;

  @IsNotEmpty()
  @IsString()
  pedestrianLocation: string;

  @IsNotEmpty()
  @IsString()
  pedestrianDirection: string;

  @IsNotEmpty()
  @IsString()
  inattentiveFactors: string;

  @IsNotEmpty()
  @IsString()
  trafficViolations: string;

  @IsNotEmpty()
  @IsString()
  legalDecision: string;

  @IsNotEmpty()
  @IsString()
  severityConsequencesAccident: string;

  @IsNotEmpty()
  @IsString()
  medicalOrganizationName: string;

  @IsNotEmpty()
  @IsBoolean()
  isMedicalOrganizationDelivery: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isMedicalAidAccident: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isSpecialEquipment: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isSeatBeltFastened: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDangerousCargoAdmission: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isPassengerFall: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isReflectiveElementsAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isChildSeatFastened: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDriverWanted: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDriverDrunk: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isParticipantLeftDetected: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isAccidentLeft: boolean;
}

export class CreateCarDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  vehicleType: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  vehicleCategory: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  steeringWheelPosition: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  typeOfDrive: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  controlType: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  engineType: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  tireType: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  yearOfIssue: string;

  @IsNotEmpty()
  @IsString()
  weightWithoutLoad: string;

  @IsNotEmpty()
  @IsString()
  weightMaxPermitted: string;

  @IsNotEmpty()
  @IsString()
  odometerStatus: string;

  @IsNotEmpty()
  @IsNumber()
  mileage: number;

  @IsNotEmpty()
  @IsString()
  motorPower: string;

  @IsNotEmpty()
  @IsNumber()
  maxSpeed: number;

  @IsNotEmpty()
  @IsNumber()
  passengerCapacity: number;

  @IsNotEmpty()
  @IsString()
  carBrand: string;

  @IsNotEmpty()
  @IsString()
  carModel: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  manufacturerCountry: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  registrationCountry: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  VIN: string;

  @IsNotEmpty()
  @IsString()
  chassisNumber: string;

  @IsNotEmpty()
  @IsString()
  vehicleBodyNumber: string;

  @IsNotEmpty()
  @IsString()
  engineNumber: string;

  @IsNotEmpty()
  @IsString()
  stateRegistrationPlate: string;

  @IsNotEmpty()
  @IsString()
  registrationCertificateNumber: string;

  @IsNotEmpty()
  @IsString()
  technicalFaults: string;

  @IsNotEmpty()
  @IsString()
  additionalEquipment: string;

  @IsNotEmpty()
  @IsString()
  tachographUsageDetails: string;

  @IsNotEmpty()
  @IsString()
  vehicleDamage: string;

  @IsNotEmpty()
  @IsString()
  contourMarking: string;

  @IsNotEmpty()
  @IsBoolean()
  isCargoDangerous: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isLicenseAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isInsurancePolicyAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isSelfBalancingMechanism: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDriverLeft: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDriverWanted: boolean;

  @IsNotEmpty()
  @IsString()
  usageReason: string;

  @IsNotEmpty()
  @IsString()
  transportationCharacteristics: string;

  @IsNotEmpty()
  @IsString()
  transportationOrganizationMeasures: string;

  @IsNotEmpty()
  @IsString()
  organization: string;

  @IsNotEmpty()
  @IsString()
  INN: string;

  @IsNotEmpty()
  @IsString()
  legalForm: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  ownershipForm: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  registrationAddress: string;
}

export class CreateRoadAccidentDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsOptional()
  @IsDateString()
  accidentDatetime: Date;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  accidentType: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  settlementStatus: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  settlementType: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  fullAddress: string;

  @IsNotEmpty()
  @IsNumber()
  population: number;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  streetCategory: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  road: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  distance: string;

  @IsNotEmpty()
  @IsNumber()
  diedNumber: number;

  @IsNotEmpty()
  @IsNumber()
  injuredNumber: number;

  @IsNotEmpty()
  @IsString()
  accidentDescription: string;

  @IsNotEmpty()
  @IsString()
  scheme: string;

  @IsNotEmpty()
  @IsNumber()
  numberOfLanes: number;

  @IsNotEmpty()
  @IsNumber()
  accidentLane: number;

  @IsNotEmpty()
  @IsNumber()
  roadwayWidth: number;

  @IsNotEmpty()
  @IsNumber()
  sidewalkWidth: number;

  @IsNotEmpty()
  @IsNumber()
  dividerWidth: number;

  @IsNotEmpty()
  @IsNumber()
  roadsideWidth: number;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  coverType: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  dividerType: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  permissibleAxialLoad: string;

  @IsNotEmpty()
  @IsNumber()
  speedLimit: number;

  @IsNotEmpty()
  @IsString()
  roadNetworkObjects: string;

  @IsNotEmpty()
  @IsString()
  nearestEducationalOrganizations: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  horizontalMarkup: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  temporaryMarkup: IdTypeDto;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  verticalMarkup: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  crossingName: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  crossingCategory: IdTypeDto;

  @IsNotEmpty()
  @IsString()
  serviceOrganization: string;

  @IsNotEmpty()
  @IsString()
  crossingOwner: string;

  @IsNotEmpty()
  @IsBoolean()
  isAttendantAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isControlsAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isSpecialTechnicalsAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isBarrierAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isFenceAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isTrafficLightsAvailable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isRoadSignsAvailable: boolean;

  @IsNotEmpty()
  @IsString()
  geographicalCoordinates: string;

  @IsNotEmpty()
  @IsString()
  weatherCondition: string;

  @IsNotEmpty()
  @IsString()
  lighting: string;

  @IsNotEmpty()
  @IsString()
  roadwayCondition: string;

  @IsNotEmpty()
  @IsString()
  transportOperationalStateDisadvantages: string;

  @IsNotEmpty()
  @IsString()
  equippingDisadvantages: string;

  @IsNotEmpty()
  @IsString()
  responseTime: string;

  @IsNotEmpty()
  @IsString()
  inspectorsActions: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  accidentParticipants: CreateAccidentParticipantDto[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  accidentCars: CreateCarDto[];

  @IsNotEmpty()
  @IsString()
  timeOfRegistration: string;
}
