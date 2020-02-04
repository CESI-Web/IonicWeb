import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAgentPage } from './gestion-agent.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAgentPageRoutingModule {}
