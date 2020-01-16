import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { User } from '../../models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['personalInformation', 'id', 'vacation', 'incorporationDate'];
  matDataSource: MatTableDataSource<User>;

  @Input() dataSource: User[];

  constructor() {
  }

  ngOnInit() {
    this.matDataSource = new MatTableDataSource(this.dataSource);
  }
}
