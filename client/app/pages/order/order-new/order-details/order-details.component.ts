import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Input() selectedItem: Item;
  @Output() emitNewOrder = new EventEmitter;
  @Output() clearEmitter = new EventEmitter;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    public snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnChanges() {
    this.newOrderForm.reset({
      // item: '',
      sku: this.selectedItem ? this.selectedItem.SKU : '',
      vendor: '',
      quantity: null,
      price: this.selectedItem ? this.selectedItem.orderPrice : '',
    });
  }

  onSubmit() {
    this.submitNewOrder();
  }

  private createForm() {
    this.newOrderForm = this.formBuilder.group({
      // item: [ '', Validators.required ],
      sku: [ '', Validators.required ],
      vendor: [ '', Validators.required ],
      quantity: [ null, Validators.required ],
      price: [ null, Validators.required ],
    });
  }

  private prepSaveNewOrder() {
    const formModel = this.newOrderForm.value;
    const itemName = this.selectedItem.name;
    const saveNewOrderObj: Order = {
      item: itemName as string,
      sku: formModel.sku as string,
      vendor: formModel.vendor as string,
      quantity: formModel.quantity as number,
      price: formModel.price as number
    };
    return saveNewOrderObj;
  }

  private submitNewOrder() {
    const newOrder = this.prepSaveNewOrder(); this.orderService.createOrder(newOrder)
      .subscribe(
        (data) => {
          this.openSnackBar('Order saved.');
          this.emitNewOrder.emit('saved');
          this.clearOrder();
        }
      ,
        (error) => this.openSnackBar('Error saving Order')
      );
  }

  private clearOrder() {
    this.newOrderForm.reset({
      // item: '',
      sku:  '',
      vendor: '',
      quantity: null,
      price: '',
    });
    this.clearEmitter.emit();
  }

  private openSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
