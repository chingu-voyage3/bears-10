import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Order } from '../../../models/order.interface';

@Component({
  selector: 'ims-order-open',
  templateUrl: './order-open.component.html',
  styleUrls: ['./order-open.component.scss']
})
export class OrderOpenComponent implements OnInit {

  @Input() openOrders: Order[];
  @Output() emitEdit = new EventEmitter;
  @Output() deleteOpenOrder = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
