import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionLocationPageRoutingModule } from './gestion-location-routing.module';

import { GestionLocationPage } from './gestion-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionLocationPageRoutingModule
  ],
  declarations: [GestionLocationPage]
})
export class GestionLocationPageModule {}
