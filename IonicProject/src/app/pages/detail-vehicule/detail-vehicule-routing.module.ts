import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVehiculePage } from './detail-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVehiculePageRoutingModule {}
