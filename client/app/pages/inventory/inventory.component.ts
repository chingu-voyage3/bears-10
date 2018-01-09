import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../core/items.service';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'ims-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private itemService: ItemsService) { }

  items: Item[];

  ngOnInit() {
    this.itemService.getAllItems()
      .subscribe(data => {
        this.items = data;
      });
  }

}

