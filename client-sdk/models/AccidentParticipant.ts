/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParticipantCategory } from './ParticipantCategory';
import type { RoadAccident } from './RoadAccident';

export type AccidentParticipant = {
    id: string;
    participantCategory: ParticipantCategory;
    vehicleParticipant: string;
    drivingExperience: number;
    drivingTime: string;
    driverLicense: string;
    medicalOrderNumber: string;
    passengerSeatVehicle: string;
    pedestrianLocation: string;
    pedestrianDirection: string;
    inattentiveFactors: string;
    trafficViolations: string;
    legalDecision: string;
    severityConsequencesAccident: string;
    medicalOrganizationName: string;
    isMedicalOrganizationDelivery: boolean;
    isMedicalAidAccident: boolean;
    isSpecialEquipment: boolean;
    isSeatBeltFastened: boolean;
    isDangerousCargoAdmission: boolean;
    isPassengerFall: boolean;
    isReflectiveElementsAvailable: boolean;
    isChildSeatFastened: boolean;
    isDriverWanted: boolean;
    isDriverDrunk: boolean;
    isParticipantLeftDetected: boolean;
    isAccidentLeft: boolean;
    roadAccident: RoadAccident;
};

