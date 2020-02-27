import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.page.html',
  styleUrls: ['./gestion-agence.page.scss'],
})
export class GestionAgencePage implements OnInit {

  public agences: Agence[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any>(baseUrl + 'Agence').subscribe(result => {
      this.agences = result;
    }, error => console.error(error));
  }

  
  ngOnInit() {
  }

}

interface Agence {
  AgecId: number;
  AgecNom: string;
  AgecAdresse: string;
  AgecTelephone: number;
  AgecFax: number;
  AgecModifUtilisateur: number;
  AgecModifDate: Date;
  AgecCreationUtilisateur: number;
  AgecArchiveDate: Date;
}