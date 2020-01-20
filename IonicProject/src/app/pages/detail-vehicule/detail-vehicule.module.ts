import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailVehiculePageRoutingModule } from './detail-vehicule-routing.module';

import { DetailVehiculePage } from './detail-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVehiculePageRoutingModule
  ],
  declarations: [DetailVehiculePage]
})
export class DetailVehiculePageModule {}
