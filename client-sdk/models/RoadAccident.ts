/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccidentParticipant } from './AccidentParticipant';
import type { AccidentType } from './AccidentType';
import type { Car } from './Car';
import type { CoverType } from './CoverType';
import type { CrossingCategory } from './CrossingCategory';
import type { DividerType } from './DividerType';
import type { HorizontalMarkup } from './HorizontalMarkup';
import type { RoadCategory } from './RoadCategory';
import type { SettlementStatus } from './SettlementStatus';
import type { SettlementType } from './SettlementType';
import type { StreetCategory } from './StreetCategory';
import type { TemporaryMarkup } from './TemporaryMarkup';
import type { User } from './User';
import type { VerticalMarkup } from './VerticalMarkup';

export type RoadAccident = {
    id: string;
    accidentDatetime: string;
    accidentType: AccidentType;
    settlementStatus: SettlementStatus;
    settlementType: SettlementType;
    fullAddress: string;
    population: number;
    streetCategory: StreetCategory;
    road: RoadCategory;
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
    coverType: CoverType;
    dividerType: DividerType;
    permissibleAxialLoad: string;
    speedLimit: number;
    roadNetworkObjects: string;
    nearestEducationalOrganizations: string;
    horizontalMarkup: HorizontalMarkup;
    temporaryMarkup: TemporaryMarkup;
    verticalMarkup: VerticalMarkup;
    crossingName: string;
    crossingCategory: CrossingCategory;
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
    trafficPoliceOfficer: User;
    accidentParticipants: Array<AccidentParticipant>;
    accidentCars: Array<Car>;
    timeOfRegistration: string;
};

