import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-parc',
  templateUrl: './gestion-parc.page.html',
  styleUrls: ['./gestion-parc.page.scss'],
})
export class GestionParcPage implements OnInit {

  constructor(private menu: MenuController) { }

    openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }

}
