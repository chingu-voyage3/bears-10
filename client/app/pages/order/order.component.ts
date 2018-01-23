import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order.service';
import { Order } from '../../models/order.interface';

@Component({
  selector: 'ims-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  orders: Order[];
  openOrders: Order[];
  closedOrders: Order[];

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getAllOrders()
    .subscribe((data) => {
      this.orders = data;
      this.openOrders = this.orders.filter((o) => !o.orderClosed)
      this.closedOrders = this.orders.filter((o) => o.orderClosed)
    });
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order._id)
      .subscribe(() => this.getOrders())
  }

}
