import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculeSpecPage } from './vehicule-spec.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculeSpecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculeSpecPageRoutingModule {}
