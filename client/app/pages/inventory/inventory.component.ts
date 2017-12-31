import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../core/items.service';

@Component({
  selector: 'ims-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private items: ItemsService) { }

  ngOnInit() {    
    this.items.getAllItems();
  }

  getAllItems(){
    console.log('button clicked');
  }
}
