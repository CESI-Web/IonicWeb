import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculeSpecPageRoutingModule } from './vehicule-spec-routing.module';

import { VehiculeSpecPage } from './vehicule-spec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculeSpecPageRoutingModule
  ],
  declarations: [VehiculeSpecPage]
})
export class VehiculeSpecPageModule {}
