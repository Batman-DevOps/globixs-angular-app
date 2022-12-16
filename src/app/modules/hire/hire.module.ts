import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireRoutingModule } from './hire-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { HireComponent } from './components/hire/hire.component';

@NgModule({
  declarations: [
    HireComponent
  ],
  imports: [
    CommonModule,
    HireRoutingModule,
    SharedModule
  ]
})
export class HireModule { }
