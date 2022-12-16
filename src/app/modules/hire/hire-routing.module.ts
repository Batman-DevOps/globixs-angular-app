import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HireComponent } from './components/hire/hire.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireRoutingModule { }
