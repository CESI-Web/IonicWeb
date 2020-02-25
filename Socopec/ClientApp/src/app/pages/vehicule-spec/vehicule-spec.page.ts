import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vehicule-spec',
  templateUrl: './vehicule-spec.page.html',
  styleUrls: ['./vehicule-spec.page.scss'],
})
export class VehiculeSpecPage implements OnInit {

  ngOnInit() {
  }

  public vehicules: Vehicule[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Vehicule[]>(baseUrl + 'Vehicule').subscribe(result => {
      this.vehicules = result;
    }, error => console.error(error));
  }
}





interface Vehicule {
  VEHI_Id: number;
  VEHI_DateCirculation: number;
  VEHI_Immatriculation: string;
}

interface Modele {
  MODE_Id: number;
  MODE_Libelle: string;
  MODE_Hauteur: number;
  MODE_Largeur: number;
  MODE_Longueur: number;
  MODE_Puissance: number;
  MODE_Type: string;
}

interface Agence {
  AGEC_Id: number;
  AGEC_Nom: string;
  AGEC_Adresse: string;
  AGEC_Telephone: number;
  AGEC_Fax: number;
}
