/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoadAccident } from './RoadAccident';

export type User = {
    id: string;
    name: string;
    department: string;
    username: string;
    password: string;
    roadAccidents: Array<RoadAccident>;
    createdAt?: string;
    updatedAt?: string;
};

