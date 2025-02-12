import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Residence } from '../../core/models/Residence';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {
  identifiant?: number;
  nextId?: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.identifiant = Number(params.get('id'));
      this.nextId = this.identifiant + 1; // Calculer l'ID suivant
    });
  }

  nextResidence() {
    if (this.nextId !== undefined) {
      this.router.navigate(['/residences/detail/', this.nextId]);
    }
  }
}
