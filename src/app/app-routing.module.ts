import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCComponent } from './container-c/container-c.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'homePage', component: ContainerCComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
