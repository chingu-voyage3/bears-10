import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../core/items.service';
import { ReceiptService } from '../../core/receipt.service';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'ims-makesale',
  templateUrl: './makesale.component.html',
  styleUrls: ['./makesale.component.scss']
})
export class MakesaleComponent implements OnInit {
  data = [];
  availableItems = [];
  currentItem = null;
  itemList = [];
  quantity = 0;
  total = 0;
  constructor(private itemsService: ItemsService,
              private receiptService: ReceiptService) { }

  ngOnInit() {
    this.itemsService.getAllItems()
      .subscribe(data => {
        this.data = data;
        this.availableItems = data.map(e => e.name);
      });
  }

  addItem() {
    this.itemList.push({
      item: this.currentItem,
      count: this.quantity
    });
    const item = this.getCurrentItem(),
          retailPrice = item ? item.retailPrice : 0;
    this.total += retailPrice * this.quantity;
  }

  keyup(val) {
    this.quantity = parseInt(val, 10);
  }

  getCurrentItem() {
    return this.data.filter(e => e.name === this.currentItem)[0];
  }
  deleteElement(i) {
    const item = this.getCurrentItem();

    const price    = item ? item.retailPrice : 0,
          quantity = this.itemList[i].count;

    this.itemList.splice(i, 1);
    this.total -= price * quantity;
  }

  completeReceipt() {
    this.itemList.forEach(e => {
      e.id = this.data.filter(el => el.name === e.item)[0]._id;
    });
    this.receiptService.completeReceipt(this.itemList.map(e => ({id: e.id, count: e.count})));
  }
}
