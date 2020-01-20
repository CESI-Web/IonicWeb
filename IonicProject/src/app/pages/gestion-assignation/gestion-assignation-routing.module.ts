import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAssignationPage } from './gestion-assignation.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAssignationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAssignationPageRoutingModule {}
