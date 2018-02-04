import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ims-makesale',
  templateUrl: './makesale.component.html',
  styleUrls: ['./makesale.component.scss']
})
export class MakesaleComponent implements OnInit {
  availableItems = ['apple', 'pear', 'banana'];
  currentItem = null;
  itemList = [
    {
      item: 'pear',
      count: 10
    },
    {
      item: 'apple',
      count: 15
    },
    {
      item: 'pineapple',
      count: 25
    }
  ];
  quantity = 0;
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    console.log('adding item!');
    console.log('item is: ', this.currentItem, ' quantity is: ', this.quantity);
    this.itemList.push({
      item: this.currentItem,
      count: this.quantity
    });
  }

  keyup(val) {
    console.log('changing input value: ', val);
    this.quantity = val;
  }

  deleteElement(i) {
    console.log('deleting item at: ', i);
  }

  completeReceipt() {

  }
}
