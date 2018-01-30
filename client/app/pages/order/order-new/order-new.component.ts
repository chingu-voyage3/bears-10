import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../../core/order.service';
import { Order } from '../../../models/order.interface';
import { Item } from '../../../models/item.interface';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'ims-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent implements OnChanges {
  // newOrderForm: FormGroup;
  selectedItem: Item;
  select = new FormControl();

  @Input() items: Item[];
  @Output() saveNewOrder = new EventEmitter;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) {

  }

  ngOnChanges() {
    this.select.reset();
  }

  clearSelected() {
    this.ngOnChanges();
  }

}
