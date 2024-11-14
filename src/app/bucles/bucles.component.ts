import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  personas: Persona[]= [
    {nombre: "Bryan", edad: 28},
    {nombre: "luis", edad: 27},
    {nombre: "juan", edad: 26},
    {nombre: "pedro", edad: 25},
  ];



}
