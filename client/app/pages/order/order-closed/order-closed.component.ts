import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../models/order.interface'

@Component({
  selector: 'ims-order-closed',
  templateUrl: './order-closed.component.html',
  styleUrls: ['./order-closed.component.scss']
})
export class OrderClosedComponent implements OnInit {

  @Input() closedOrders: Order[]

  constructor() { }

  ngOnInit() {
  }

}
