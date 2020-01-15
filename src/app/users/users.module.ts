import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatPaginatorModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { UsersTableComponent } from './components';
import { UserService } from './services';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
