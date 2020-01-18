import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from './services';
import { User } from './models';
import { NotificationService } from '../core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[];

  constructor(private userService: UserService, private notificationService: NotificationService) {
    this.userService.getUserList().subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.notificationService.success('Users has been loaded', 'Success :)');
      },
      error: (error: HttpErrorResponse) => this.notificationService.error(`Uups! error :( ${error}`, 'Error')
    });
  }

  applyFilter(date: Date) {
    if (this.userService.validDate(date)) {
      this.users = this.userService.filterUserList(date);
    } else {
      this.notificationService.error('Uups! :( please check date input', 'Invalid Date');
    }
  }
}
