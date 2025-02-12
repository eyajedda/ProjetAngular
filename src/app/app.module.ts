import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './Residences/residence/residence.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterComponent } from './footer/footer.component';
import { DetailResidenceComponent } from './Residences/detail-residence/detail-residence.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Apartment/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartment/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartment/add-apartment/add-apartment.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundPageComponent,
    FooterComponent,
    DetailResidenceComponent,
    AddResidenceComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
