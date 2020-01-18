import { Component, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from './services';
import { User } from './models';
import { NotificationService } from '../core';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[];

  @ViewChild('filterComponent', { static: false }) filterComponent: FilterComponent;

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

  resetFilter() {
    this.users = this.userService.getOriginalUserList();
    this.filterComponent.clearDate();
  }
}
