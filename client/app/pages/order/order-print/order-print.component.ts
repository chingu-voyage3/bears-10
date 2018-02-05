import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../../../models/order.interface';

@Component({
  selector: 'ims-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.scss']
})
export class OrderPrintComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public printDialogRef: MatDialogRef<OrderPrintComponent>
  ) { }

  ngOnInit() {
  }

  closePrint() {
    this.printDialogRef.close();
  }

  printWindow() {
    window.print();
  }
}
