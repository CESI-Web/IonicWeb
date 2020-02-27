import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gestion-parc',
  templateUrl: './gestion-parc.page.html',
  styleUrls: ['./gestion-parc.page.scss'],
})
export class GestionParcPage implements OnInit {

  public vehicules: Vehicule[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any>(baseUrl + 'Vehicule').subscribe(result => {
      this.vehicules = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Vehicule {
  VehiId: number;
  VehiModeId: number;
  VehiAgecId: number;
  VehiStatId: number;
  VehiDateCirculation: Date;
  VehiImmatriculation: string;
  VehiModifUtilisateur: number;
  VehiModifDate: Date;
  VehiCreationUtilisateur: number;
  VehiArchiveDate: Date;
}
