import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order.service';
import { ItemsService } from '../../core/items.service';
import { Order } from '../../models/order.interface';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'ims-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private itemsService: ItemsService
  ) {}

  orders: Order[];
  openOrders: Order[];
  closedOrders: Order[];
  items: Item[];

  ngOnInit() {
    this.getOrders();
    this.getItems();
  }

  getOrders() {
    this.orderService.getAllOrders()
    .subscribe((data) => {
      this.orders = data;
      this.openOrders = this.orders.filter((o) => !o.orderClosed);
      this.closedOrders = this.orders.filter((o) => o.orderClosed);
    });
  }

  getItems() {
    this.itemsService.getAllItems()
      .subscribe((data) => {
        this.items = data;
      });
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order._id)
      .subscribe(() => this.getOrders());
  }

}
