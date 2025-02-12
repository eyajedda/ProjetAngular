import { Component } from '@angular/core';
import { Residence } from '../../core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  AddresseRecherche!: string ; 
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

    ShowLocation(i:number) :void{
      if (this.listResidences[i].address == "inconnu" )
        alert ('Adresse résidence inconnu');
      else  alert(`Adresse : ${this.listResidences[i].address}`); 
    }

    getStatus(status: string): string {
      switch (status) {
        case 'Disponible':
          return 'status-available';
        case 'En Construction':
          return 'status-construction';
        case 'Vendu':
          return 'status-sold';
        default:
          return 'status-unknown';
      }
    }

    favoriteResidences: Residence[] = [];

    addToFavorites(i:number) {
        this.favoriteResidences.push(this.listResidences[i]);
        alert(`La résidence "${this.listResidences[i].name}" a été ajoutée aux favoris.`);
      }
  


}

