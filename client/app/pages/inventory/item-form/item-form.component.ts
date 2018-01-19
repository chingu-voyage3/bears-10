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

  ngOnInit() {
    if (this.item._id) {
      this.newItem = Object.assign({}, this.item);
    }
    else {
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
        expectedDelivery: null
      }
    }
  }

  newItem: Item;
  @Input() item: Item;
  @Output() submit = new EventEmitter;
  @Output() cancel = new EventEmitter;
}
