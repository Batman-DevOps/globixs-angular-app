import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'youth', loadChildren: () => import('./modules/youth/youth.module').then(m => m.YouthModule) },
  { path: 'community-services', loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule) },
  { path: 'blogs', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  // { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }