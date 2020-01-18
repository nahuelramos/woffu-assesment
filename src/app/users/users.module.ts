import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatSortModule, MatProgressBarModule } from '@angular/material';

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
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers: [
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
