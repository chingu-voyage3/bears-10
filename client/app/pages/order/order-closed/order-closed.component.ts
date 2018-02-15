import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Order } from '../../../models/order.interface';
import { OrderPrintComponent } from '../order-print/order-print.component';

@Component({
  selector: 'ims-order-closed',
  templateUrl: './order-closed.component.html',
  styleUrls: ['./order-closed.component.scss']
})
export class OrderClosedComponent implements OnInit {

  @Input() closedOrders: Order[];
  @Output() deleteClosedOrder = new EventEmitter;
  printDialogRef: MatDialogRef<OrderPrintComponent>;
  searchText = '';

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openPrint(order) {
    this.printDialogRef = this.dialog.open(OrderPrintComponent, { data: order });
  }
}
