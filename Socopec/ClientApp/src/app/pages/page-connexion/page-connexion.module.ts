import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageConnexionPageRoutingModule } from './page-connexion-routing.module';

import { PageConnexionPage } from './page-connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageConnexionPageRoutingModule
  ],
  declarations: [PageConnexionPage]
})
export class PageConnexionPageModule {}
