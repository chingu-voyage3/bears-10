import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ims-makesale',
  templateUrl: './makesale.component.html',
  styleUrls: ['./makesale.component.scss']
})
export class MakesaleComponent implements OnInit {
  foods = ['apple', 'pear', 'banana'];
  food = null;
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
    console.log('food is: ', this.food, ' quantity is: ', this.quantity);
    this.itemList.push({
      item: this.food,
      count: this.quantity
    });
  }

  keyup(val) {
    console.log('changing input value: ', val);
    this.quantity = val;
  }

}
