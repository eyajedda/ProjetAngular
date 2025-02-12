import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments-by-residence/apartments-by-residence.component';

const routes: Routes = [
  /* c. Dès le chargement de l’application, la liste des Résidences s’affiche dans le
composant Home. */
  {path: '' , redirectTo:'/residences' , pathMatch: 'full'}, 
  {path:'home' , component:HomeComponent},
  {path:'residences' , component:ResidenceComponent},
  {path:'apartments' , component:ApartmentsComponent},
  {path: 'residences/detail/:id' , component: DetailResidenceComponent},
  { path: 'add-residence', component: AddResidenceComponent }, 
  { path: 'add-residence/:id', component: AddResidenceComponent },
  { path: 'residences/apartmentByResidence/:id', component: ApartmentsByResidenceComponent },

  
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
