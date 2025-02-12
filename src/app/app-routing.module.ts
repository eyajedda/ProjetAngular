import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { DetailResidenceComponent } from './Residences/detail-residence/detail-residence.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ApartmentsComponent } from './Apartment/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartment/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartment/add-apartment/add-apartment.component';

const routes: Routes = [

  {path: '' , redirectTo:'/residences' , pathMatch: 'full'}, 
  {path:'home' , component:HomeComponent},
  {path:'residences' , component:ResidenceComponent},
  {path:'apartments' , component:ApartmentsComponent},
  {path: 'residences/detail/:id' , component: DetailResidenceComponent},
  { path: 'add-residence', component: AddResidenceComponent }, 
  { path: 'add-residence/:id', component: AddResidenceComponent },
  { path: 'residences/apartmentByResidence/:id', component: ApartmentsByResidenceComponent },
  { path: 'add-apartment', component: AddApartmentComponent },


  
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
