import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/internal/Observable';

import { NotificationService } from 'src/app/core';
import { User } from '../../models';

@Injectable()
export class UserService {
    private users: User[];

    constructor(private httpClient: HttpClient, private notificationService: NotificationService) {
    }

    getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>(`/api/v1/users`).pipe(map((users: User[]) => {
            this.users = users.map((user: User) => new User({
                ...user,
                EmployeeStartDate: new Date(user.EmployeeStartDate)
            }));

            return [...this.users];
        }));
    }

    validDate(date: Date): boolean {
        return (date instanceof Date);
    }

    filterUserList(date: Date): User[] {        
        return this.users.filter((user: User) => {
            return date.toLocaleDateString() === user.EmployeeStartDate.toLocaleDateString();
        });
    }

    getOriginalUserList(): User[] {
        return [...this.users];
    }
}
