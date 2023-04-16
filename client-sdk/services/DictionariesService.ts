/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dictionary } from '../models/Dictionary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DictionariesService {

    /**
     * @param dictionary
     * @returns Dictionary
     * @throws ApiError
     */
    public static dictionariesControllerFindOne(
        dictionary: string,
    ): CancelablePromise<Array<Dictionary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dictionaries/{dictionary}',
            path: {
                'dictionary': dictionary,
            },
        });
    }

}
