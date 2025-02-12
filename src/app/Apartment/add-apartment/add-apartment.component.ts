import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  apartForm: FormGroup;
  residences = ['Residence A', 'Residence B', 'Residence C']; // Liste fictive des résidences
  newApart: any = {};

  constructor() {
    this.apartForm = new FormGroup({
      residence: new FormControl('', Validators.required),
      apartmentNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      floorNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      surfaceArea: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      roomsNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
      terrace: new FormControl(false), 
      surfaceTerrace: new FormControl('', Validators.pattern("^[0-9]+$"))
    });

    // Activation/Désactivation du champ Surface Terrace selon l'état du checkbox
    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceTerrace')?.enable();
      } else {
        this.apartForm.get('surfaceTerrace')?.disable();
      }
    });
  }

  addApartment() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log('Nouvel appartement ajouté :', this.newApart);
    }
  }
}