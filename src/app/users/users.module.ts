import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersTableComponent } from './components';
import { UserService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
