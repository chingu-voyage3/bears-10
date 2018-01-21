import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../core/order.service';
import { Order } from '../../../models/order.interface';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'ims-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent implements OnChanges {
  newOrderForm: FormGroup
  @Output() saveNewOrder = new EventEmitter

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) {
    this.createForm()
  }

  ngOnChanges() {
    this.newOrderForm.reset({
      item: '',
      sku: '',
      vendor: '',
      quantity: null,
      price: null,
    })
  }

  onSubmit() {
    this.submitNewOrder()
  }

  private createForm() {
    this.newOrderForm = this.formBuilder.group({
      item: [ '', Validators.required ],
      sku: [ '', Validators.required ],
      vendor: [ '', Validators.required ],
      quantity: [ null, Validators.required ],
      price: [ null, Validators.required ],
    })
  }

  private prepSaveNewOrder() {
    const formModel = this.newOrderForm.value
    const saveNewOrderObj: Order = {
      item: formModel.item as string,
      sku: formModel.sku as string,
      vendor: formModel.vendor as string,
      quantity: formModel.quantity as number,
      price: formModel.price as number
    }
    return saveNewOrderObj
  }

  private submitNewOrder() {
    const newOrder = this.prepSaveNewOrder();this.orderService.createOrder(newOrder)
      .subscribe(
        (data) => {
          this.openSnackBar('Order saved.');
          this.saveNewOrder.emit('saved')
          this.ngOnChanges()
        }
      ,
        (error) => this.openSnackBar('Error saving Order')
      )
  }

  private clearOrder() {
    this.ngOnChanges()
  }

  private openSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}
