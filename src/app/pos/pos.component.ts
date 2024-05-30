import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  saleItems: string[] = [];

  addItem(item: string){
    this.saleItems.push(item);
  }

  openOptions(){
    
  }

}
