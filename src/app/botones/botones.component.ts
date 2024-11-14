import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  constructor(){

  }

  text_color:string = '';

  button_disabled:boolean = false;

  src:string = "https://images.pexels.com/photos/29289697/pexels-photo-29289697/free-photo-of-deslizandose-al-atardecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

}
