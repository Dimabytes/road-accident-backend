/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserWithoutPassword } from '../models/UserWithoutPassword';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns UserWithoutPassword
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<Array<UserWithoutPassword>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

}
