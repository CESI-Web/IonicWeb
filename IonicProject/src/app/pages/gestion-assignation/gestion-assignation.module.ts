import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAssignationPageRoutingModule } from './gestion-assignation-routing.module';

import { GestionAssignationPage } from './gestion-assignation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAssignationPageRoutingModule
  ],
  declarations: [GestionAssignationPage]
})
export class GestionAssignationPageModule {}
