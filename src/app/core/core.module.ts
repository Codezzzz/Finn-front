import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FullModalService } from './service/full-modal.service';
import { SearchHouseService } from './service/search-house.service';
import { UtilService } from './service/util.service';

@NgModule({
  imports: [
    CommonModule, CoreRoutingModule, ReactiveFormsModule, FormsModule,
  ],
  declarations: [HeaderComponent, LoginComponent],
  exports: [HeaderComponent, LoginComponent, RouterModule],
  providers: [FullModalService, SearchHouseService, UtilService]
})
export class CoreModule { }
