/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoadAccident } from './RoadAccident';

export type UserWithoutPassword = {
    id: string;
    name: string;
    department: string;
    username: string;
    roadAccidents: Array<RoadAccident>;
    createdAt?: string;
    updatedAt?: string;
};

