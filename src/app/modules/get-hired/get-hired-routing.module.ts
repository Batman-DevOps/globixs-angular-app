import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetHiredComponent } from './components/get-hired/get-hired.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GetHiredComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetHiredRoutingModule { }
