import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

import { HowToHelpComponent } from './components/how-to-help/how-to-help.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    HowToHelpComponent,
    WhoAreWeComponent,
    WhatWeDoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
