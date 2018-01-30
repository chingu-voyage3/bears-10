import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OrderService } from '../../core/order.service';
import { ItemsService } from '../../core/items.service';
import { Order } from '../../models/order.interface';
import { Item } from '../../models/item.interface';

import { DeleteDialogComponent } from '../inventory/item-list/delete-dialog/delete-dialog.component';

@Component({
  selector: 'ims-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private itemsService: ItemsService,
    public dialog: MatDialog
  ) {}

  orders: Order[];
  openOrders: Order[];
  closedOrders: Order[];
  items: Item[];

  dialogRef: MatDialogRef<DeleteDialogComponent>;

  ngOnInit() {
    this.getOrders();
    this.getItems();
  }

  openDeleteDialog(order: Order) {
    this.dialogRef = this.dialog.open(DeleteDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        this.deleteOrder(order);
      }
    });
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
