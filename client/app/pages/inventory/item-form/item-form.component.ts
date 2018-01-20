import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { Item } from '../../../models/item.interface';

@Component({
  selector: 'ims-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent implements OnInit {

  constructor() { }

  newItem: Item;
  isNewItem: boolean;
  @Input() item: Item;
  @Output() submitEdit = new EventEmitter;
  @Output() submitNew = new EventEmitter;
  @Output() cancel = new EventEmitter;

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
      this.newItem = Object.assign({}, this.item);
    }
    else {
      this.isNewItem = true;
      this.newItem = {
        _id: '',
        name: '',
        SKU: '',
        sellable: false,
        retailPrice: 0,
        orderPrice: 0,
        manufacturer: '',
        description: '',
        size: '',
        taxExempt: false,
        count: 0,
        reorderedCount: 0,
        orderNeeded: false,
        orderPlaced: false,
        backordered: false,
        expectedDelivery: null,
        category: ''
      }
    }
  }

}
