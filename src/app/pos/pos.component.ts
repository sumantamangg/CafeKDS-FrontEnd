import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { coffee } from '../shared/data';

export interface coffee {
  "DrinkType": string,
  "DrinkSize": string,
  "MilkChoice": string,
  "Flavour": string,
  "Comment": string[]
}
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  saleItems: coffee[] = [];
  selectedSaleItemIndex = -1;
  buttons: string[] = ['Extra Hot', 'Luke Warm', '1/2 Strength', '+1 shot', ];


  constructor(private modalService: NgbModal){}

  addItem(item: string){
    let newItem: coffee = {
      DrinkType: item,
      DrinkSize: 'Medium',  
      MilkChoice: 'FullCream',
      Flavour: '',
      Comment: []
    }
    this.saleItems.push(newItem)
  }

  openOptions(content: TemplateRef<any> ){
    this.modalService.open(content);
  }

  onSelectedSaleItem(index:number){
    this.selectedSaleItemIndex = index;
  }

  onRemoveSaleItem( ){
    if (this.selectedSaleItemIndex < 0){
      return;
    } 
    this.saleItems.splice(this.selectedSaleItemIndex, 1);
  }

  onClickedComment(comment: string){
    console.log(comment);
    this.saleItems[this.selectedSaleItemIndex].Comment.push(comment);
  }

}
