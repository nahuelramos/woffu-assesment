import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { UserService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns: string[] = ['personalInformation', 'id', 'vacation', 'incorporationDate'];
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService) {
    this.userService.getUserList().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnInit() {
  }
}
