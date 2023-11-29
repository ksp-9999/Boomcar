import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.css']
})
export class CarsCardComponent {
@Input() carData:any


}
