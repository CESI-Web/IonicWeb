import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'page-connexion',
    loadChildren: () => import('./pages/page-connexion/page-connexion.module').then( m => m.PageConnexionPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'gestion-parc',
    loadChildren: () => import('./pages/gestion-parc/gestion-parc.module').then( m => m.GestionParcPageModule)
  },
  {
    path: 'detail-vehicule',
    loadChildren: () => import('./pages/detail-vehicule/detail-vehicule.module').then( m => m.DetailVehiculePageModule)
  },
  {
    path: 'gestion-agent',
    loadChildren: () => import('./pages/gestion-agent/gestion-agent.module').then( m => m.GestionAgentPageModule)
  },
  {
    path: 'detail-agence',
    loadChildren: () => import('./pages/detail-agence/detail-agence.module').then( m => m.DetailAgencePageModule)
  },
  {
    path: 'gestion-location',
    loadChildren: () => import('./pages/gestion-location/gestion-location.module').then( m => m.GestionLocationPageModule)
  },
  {
    path: 'gestion-assignation',
    loadChildren: () => import('./pages/gestion-assignation/gestion-assignation.module').then( m => m.GestionAssignationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
