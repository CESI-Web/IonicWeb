import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAgentPageRoutingModule } from './gestion-agent-routing.module';

import { GestionAgentPage } from './gestion-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAgentPageRoutingModule
  ],
  declarations: [GestionAgentPage]
})
export class GestionAgentPageModule {}
