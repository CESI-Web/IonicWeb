import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAgencePageRoutingModule } from './gestion-agence-routing.module';

import { GestionAgencePage } from './gestion-agence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAgencePageRoutingModule
  ],
  declarations: [GestionAgencePage]
})
export class GestionAgencePageModule {}
