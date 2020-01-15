import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {
    }

    getUserList() {
        return this.httpClient.get<User[]>(`/api/v1/users`);
    }
}
