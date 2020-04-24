import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent  {

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

}
