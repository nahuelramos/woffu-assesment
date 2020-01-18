import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';

import { User } from '../../models';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnChanges {
    displayedColumns: string[] = ['FirstName', 'UserKey', 'UsedDays', 'EmployeeStartDate'];
    matDataSource: MatTableDataSource<User>;

    @Input() dataSource: User[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {
    }

    ngOnInit() {
        this.createDataSourceAndSorter();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges['dataSource']) {
            this.createDataSourceAndSorter();
        }
    }

    private createDataSourceAndSorter() {
        this.matDataSource = new MatTableDataSource(this.dataSource);
        this.matDataSource.sort = this.sort;
    }
}
