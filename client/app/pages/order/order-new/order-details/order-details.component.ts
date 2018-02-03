import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { OrderService } from '../../../../core/order.service';
import { Order } from '../../../../models/order.interface';
import { Item } from '../../../../models/item.interface';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'ims-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnChanges {
  newOrderForm: FormGroup;
  checked = false;
  mask: Function;

  @Input() selectedItem: Item;
  @Output() emitNewOrder = new EventEmitter;
  @Output() clearEmitter = new EventEmitter;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) {
    this.mask = createNumberMask({ allowDecimal: true });
    this.createForm();
  }

  ngOnChanges() {
    this.newOrderForm.reset({
      sku: this.selectedItemSku(),
      vendor: this.selectedItemVendor(),
      quantity: null,
      price: this.selectedItemPrice(),
    });
    this.validatNew(this.newOrderForm);
  }

  selectedItemSku() {
    return this.selectedItem ? this.selectedItem.SKU : '';
  }

  selectedItemPrice() {
    return this.selectedItem ? this.selectedItem.orderPrice : null;
  }

  selectedItemVendor() {
    return this.selectedItem ? this.selectedItem.manufacturer : '';
  }

  onSubmit() {
    this.submitNewOrder();
  }

  validatNew(input: AbstractControl) {
    const newControl = input.get('new');
    if (!this.selectedItem) {
      newControl.setValidators([Validators.required]);
      newControl.updateValueAndValidity();
    } else {
      newControl.clearValidators();
      newControl.updateValueAndValidity();
    }
  }


  private createForm() {
    this.newOrderForm = this.formBuilder.group({
      new: new FormControl(''),
      sku: new FormControl('', Validators.required),
      vendor: new FormControl('', Validators.required),
      quantity: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      closed: new FormControl({ value: this.checked })
    });
  }

  private prepSaveNewOrder() {
    const formModel = this.newOrderForm.value;
    const itemName = this.itemName();
    const saveNewOrderObj: Order = {
      item: itemName as string,
      sku: formModel.sku as string,
      vendor: formModel.vendor as string,
      quantity: formModel.quantity as number,
      price: formModel.price as number,
      orderClosed: formModel.closed as boolean,
      dateClosed: this.orderService.isClosed(formModel.closed)
    };
    return saveNewOrderObj;
  }

  itemName() {
    return this.selectedItem ? this.selectedItem.name : this.newOrderForm.value.new;
  }

  private submitNewOrder() {
    const newOrder = this.prepSaveNewOrder();
    this.clearOrder();
    this.sendSubmission(newOrder);
  }

  private sendSubmission(order: Order) {
    this.orderService.createOrder(order)
    .subscribe(
      (data) => {
        this.openSnackBar('Order saved.');
        this.emitNewOrder.emit('saved');
      }
    ,
      (error) => this.openSnackBar('Error saving Order')
    );
  }

  clearOrder() {
    this.newOrderForm.reset();
    this.clearEmitter.emit();
  }

  private openSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
