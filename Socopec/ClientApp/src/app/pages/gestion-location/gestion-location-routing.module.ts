import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionLocationPage } from './gestion-location.page';

const routes: Routes = [
  {
    path: '',
    component: GestionLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionLocationPageRoutingModule {}
