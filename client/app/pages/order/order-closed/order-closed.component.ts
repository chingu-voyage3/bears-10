import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Order } from '../../../models/order.interface'

@Component({
  selector: 'ims-order-closed',
  templateUrl: './order-closed.component.html',
  styleUrls: ['./order-closed.component.scss']
})
export class OrderClosedComponent implements OnInit {

  @Input() closedOrders: Order[]
  @Output() deleteClosedOrder = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
