import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/core/modules/app-material.module';

import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { HireFormComponent } from 'src/app/shared/components/hire-form/hire-form.component';
import { GetHiredFormComponent } from 'src/app/shared/components/get-hired-form/get-hired-form.component';
// import { EventComponent } from 'src/app/shared/components/event/event.component';
// import { FundRaisingComponent } from 'src/app/shared/components/fund-raising/fund-raising.component';

import { EllipsisPipe } from '../pipes/ellipsis.pipe';

// import { AccessControlDirective } from 'src/app/core/directives/access-control.directive';

@NgModule({
    declarations: [
      BottomSheetComponent,
      // EventComponent,
      // FundRaisingComponent,
      HireFormComponent,
      GetHiredFormComponent,
      EllipsisPipe
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      AppMaterialModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AppMaterialModule,
      HireFormComponent,
      GetHiredFormComponent,
      // EventComponent,
      // FundRaisingComponent,
      EllipsisPipe
    ],
    providers: [ ]
  })
  export class SharedModule { }
  