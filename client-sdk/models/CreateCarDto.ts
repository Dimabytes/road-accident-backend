/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdTypeDto } from './IdTypeDto';

export type CreateCarDto = {
    id: string;
    vehicleType: IdTypeDto;
    vehicleCategory: IdTypeDto;
    steeringWheelPosition: IdTypeDto;
    typeOfDrive: IdTypeDto;
    controlType: IdTypeDto;
    engineType: IdTypeDto;
    tireType: IdTypeDto;
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
    manufacturerCountry: IdTypeDto;
    registrationCountry: IdTypeDto;
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
    ownershipForm: IdTypeDto;
    registrationAddress: string;
};

