import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAgencePage } from './gestion-agence.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAgencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAgencePageRoutingModule {}
