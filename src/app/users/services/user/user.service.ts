import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from '../../models';

@Injectable()
export class UserService {
    private users: User[];

    constructor(private httpClient: HttpClient) {
    }

    getUserList() {
        return this.httpClient.get<User[]>(`/api/v1/users`).pipe(map((users: User[]) => {
            this.users = users.map((user: User) => new User({
                ...user,
                EmployeeStartDate: new Date(user.EmployeeStartDate)
            }));

            return [...this.users];
        }));
    }

    filterUserList(date: Date) {
        return this.users.filter((user: User) => {
            return date.toLocaleDateString() === user.EmployeeStartDate.toLocaleDateString();
        });
    }
}
