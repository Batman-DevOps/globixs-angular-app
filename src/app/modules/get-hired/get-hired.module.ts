import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetHiredRoutingModule } from './get-hired-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { GetHiredComponent } from './components/get-hired/get-hired.component';

@NgModule({
  declarations: [
    GetHiredComponent
  ],
  imports: [
    CommonModule,
    GetHiredRoutingModule,
    SharedModule
  ]
})
export class GetHiredModule { }
