/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoadAccidentDto } from '../models/CreateRoadAccidentDto';
import type { RoadAccident } from '../models/RoadAccident';
import type { UpdateRoadAccidentDto } from '../models/UpdateRoadAccidentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RoadAccidentsService {

    /**
     * @param requestBody
     * @returns RoadAccident
     * @throws ApiError
     */
    public static roadAccidentsControllerCreate(
        requestBody: CreateRoadAccidentDto,
    ): CancelablePromise<RoadAccident> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roadAccidents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accidentDatetimeStart
     * @param accidentDatetimeEnd
     * @param trafficPoliceOfficerId
     * @param accidentType
     * @returns RoadAccident
     * @throws ApiError
     */
    public static roadAccidentsControllerFindAll(
        accidentDatetimeStart?: string,
        accidentDatetimeEnd?: string,
        trafficPoliceOfficerId?: string,
        accidentType?: string,
    ): CancelablePromise<Array<RoadAccident>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roadAccidents',
            query: {
                'accidentDatetimeStart': accidentDatetimeStart,
                'accidentDatetimeEnd': accidentDatetimeEnd,
                'trafficPoliceOfficerId': trafficPoliceOfficerId,
                'accidentType': accidentType,
            },
        });
    }

    /**
     * @param id
     * @returns RoadAccident
     * @throws ApiError
     */
    public static roadAccidentsControllerFindOne(
        id: string,
    ): CancelablePromise<RoadAccident> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roadAccidents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns RoadAccident
     * @throws ApiError
     */
    public static roadAccidentsControllerUpdate(
        id: string,
        requestBody: UpdateRoadAccidentDto,
    ): CancelablePromise<RoadAccident> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/roadAccidents/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
