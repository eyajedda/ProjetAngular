import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {

  identifiant?:number; 
  
    constructor(private route: ActivatedRoute, private router: Router) {
      this.route.paramMap.subscribe(params => {
        this.identifiant = Number(params.get('id'));
      });
    }
}
