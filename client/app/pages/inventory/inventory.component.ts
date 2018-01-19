import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../core/items.service';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'ims-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  items: Item[];
  selectedItem: Item = null;
  showList: boolean = true;

  ngOnInit() {
    this.itemsService.getAllItems()
      .subscribe(data => {
        this.items = data;
      });
  }

  editItem(item: Item) {
    this.selectedItem = item;
    this.showList = false;
  }

  onSaveItem(item: Item) {
    this.itemsService.updateItem(item._id, item)
      .subscribe(() => {
        this.itemsService.getAllItems()
          .subscribe(data => {
            this.items = data;
            this.showList = true;
          })
      })
  }

  onCancelEdit() {
    this.selectedItem = null;
    this.showList = true;
  }
}
