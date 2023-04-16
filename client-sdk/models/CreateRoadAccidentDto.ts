/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateAccidentParticipantDto } from './CreateAccidentParticipantDto';
import type { CreateCarDto } from './CreateCarDto';
import type { IdTypeDto } from './IdTypeDto';

export type CreateRoadAccidentDto = {
    id: string;
    accidentDatetime: string;
    accidentType: IdTypeDto;
    settlementStatus: IdTypeDto;
    settlementType: IdTypeDto;
    fullAddress: string;
    population: number;
    streetCategory: IdTypeDto;
    road: IdTypeDto;
    distance: string;
    diedNumber: number;
    injuredNumber: number;
    accidentDescription: string;
    scheme: string;
    numberOfLanes: number;
    accidentLane: number;
    roadwayWidth: number;
    sidewalkWidth: number;
    dividerWidth: number;
    roadsideWidth: number;
    coverType: IdTypeDto;
    dividerType: IdTypeDto;
    permissibleAxialLoad: string;
    speedLimit: number;
    roadNetworkObjects: string;
    nearestEducationalOrganizations: string;
    horizontalMarkup: IdTypeDto;
    temporaryMarkup: IdTypeDto;
    verticalMarkup: IdTypeDto;
    crossingName: string;
    crossingCategory: IdTypeDto;
    serviceOrganization: string;
    crossingOwner: string;
    isAttendantAvailable: boolean;
    isControlsAvailable: boolean;
    isSpecialTechnicalsAvailable: boolean;
    isBarrierAvailable: boolean;
    isFenceAvailable: boolean;
    isTrafficLightsAvailable: boolean;
    isRoadSignsAvailable: boolean;
    geographicalCoordinates: string;
    weatherCondition: string;
    lighting: string;
    roadwayCondition: string;
    transportOperationalStateDisadvantages: string;
    equippingDisadvantages: string;
    responseTime: string;
    inspectorsActions: string;
    accidentParticipants: Array<CreateAccidentParticipantDto>;
    accidentCars: Array<CreateCarDto>;
    timeOfRegistration: string;
};

