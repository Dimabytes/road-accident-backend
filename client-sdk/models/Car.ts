/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ControlType } from './ControlType';
import type { Country } from './Country';
import type { EngineType } from './EngineType';
import type { OwnershipForm } from './OwnershipForm';
import type { RoadAccident } from './RoadAccident';
import type { SteeringWheelPosition } from './SteeringWheelPosition';
import type { TireType } from './TireType';
import type { TypeOfDrive } from './TypeOfDrive';
import type { VehicleCategory } from './VehicleCategory';
import type { VehicleType } from './VehicleType';

export type Car = {
    id: string;
    vehicleType: VehicleType;
    vehicleCategory: VehicleCategory;
    steeringWheelPosition: SteeringWheelPosition;
    typeOfDrive: TypeOfDrive;
    controlType: ControlType;
    engineType: EngineType;
    tireType: TireType;
    color: string;
    yearOfIssue: string;
    weightWithoutLoad: string;
    weightMaxPermitted: string;
    odometerStatus: string;
    mileage: number;
    motorPower: string;
    maxSpeed: number;
    passengerCapacity: number;
    carBrand: string;
    carModel: string;
    manufacturerCountry: Country;
    registrationCountry: Country;
    VIN: string;
    chassisNumber: string;
    vehicleBodyNumber: string;
    engineNumber: string;
    stateRegistrationPlate: string;
    registrationCertificateNumber: string;
    technicalFaults: string;
    additionalEquipment: string;
    tachographUsageDetails: string;
    vehicleDamage: string;
    contourMarking: string;
    isCargoDangerous: boolean;
    isLicenseAvailable: boolean;
    isInsurancePolicyAvailable: boolean;
    isSelfBalancingMechanism: boolean;
    isDriverLeft: boolean;
    isDriverWanted: boolean;
    usageReason: string;
    transportationCharacteristics: string;
    transportationOrganizationMeasures: string;
    organization: string;
    INN: string;
    legalForm: string;
    ownershipForm: OwnershipForm;
    registrationAddress: string;
    roadAccident: RoadAccident;
};

