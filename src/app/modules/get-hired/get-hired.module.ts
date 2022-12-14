import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetHiredRoutingModule } from './get-hired-routing.module';
import { GetHiredComponent } from './components/get-hired/get-hired.component';


@NgModule({
  declarations: [
    GetHiredComponent
  ],
  imports: [
    CommonModule,
    GetHiredRoutingModule
  ]
})
export class GetHiredModule { }
