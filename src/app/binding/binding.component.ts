import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
 titre :string="apprendre le data binding dans angular 10";
 status: boolean=true; 
 nom :string ="Khalil ltaief";
 constructor() { }

  ngOnInit(): void {
  }
  changerTitre(){

    this.titre="nouveau titre";
  }

}
