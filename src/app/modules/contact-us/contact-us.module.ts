import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './contact-us.service';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ],
  providers: [ContactUsService]
})
export class ContactUsModule { }
