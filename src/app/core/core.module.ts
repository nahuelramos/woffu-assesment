import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotFoundComponent } from './pages';
import { AuthInterceptor } from './services';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [NotFoundComponent, HeaderComponent],
  exports: [NotFoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule { }
