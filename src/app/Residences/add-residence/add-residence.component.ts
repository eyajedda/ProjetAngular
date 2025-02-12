import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
    residenceForm: FormGroup;
    imagePreview: string | ArrayBuffer | null = null; // Stockage de l'aperçu de l'image

  
    constructor(private fb: FormBuilder) {
      this.residenceForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required, Validators.minLength(3)]],
        address: ['', Validators.required],
        image: [null, Validators.required],
        status: ['Disponible'],
        apartments: this.fb.array([])
      });
    }
  
    get apartments(): FormArray<FormGroup> {
      return this.residenceForm.get('apartments') as FormArray<FormGroup>;
    }
    
  
    addApartment() {
      this.apartments.push(this.fb.group({
        residence: ['', Validators.required],
        apartmentNumber: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
        floorNumber: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
        terrace: [false],
        surfaceTerrace: [{ value: '', disabled: true }]
      }));
    }
  
    removeApartment(index: number) {
      this.apartments.removeAt(index);
    }
  
    addResidence() {
      if (this.residenceForm.valid) {
        console.log('Nouvelle résidence ajoutée :', this.residenceForm.value);
      }
    }

    onFileDropped(event: DragEvent) {
      event.preventDefault();
      if (event.dataTransfer?.files.length) {
        this.handleFileInput(event.dataTransfer.files[0]);
      }
    }
  
    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.handleFileInput(file);
      }
    }
  
    handleFileInput(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.residenceForm.patchValue({ image: file });
    }
  
  }
  
