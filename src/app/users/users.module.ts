import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { UsersTableComponent } from './components';
import { UserService } from './services';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
