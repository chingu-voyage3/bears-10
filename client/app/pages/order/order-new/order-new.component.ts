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
    // this.createForm();
    // this.selectItem();
  }

  ngOnChanges() {
    // this.newOrderForm.reset({
    //   item: '',
    //   sku: '',
    //   vendor: '',
    //   quantity: null,
    //   price: null,
    // });
    this.select.reset();
  }

  // onSubmit() {
  //   this.submitNewOrder();
  // }

  // private createForm() {
  //   this.newOrderForm = this.formBuilder.group({
  //     item: [ '', Validators.required ],
  //     sku: [ '', Validators.required ],
  //     vendor: [ '', Validators.required ],
  //     quantity: [ null, Validators.required ],
  //     price: [ null, Validators.required ],
  //   });
  // }

  // private prepSaveNewOrder() {
  //   const formModel = this.newOrderForm.value;
  //   const saveNewOrderObj: Order = {
  //     item: formModel.item as string,
  //     sku: formModel.sku as string,
  //     vendor: formModel.vendor as string,
  //     quantity: formModel.quantity as number,
  //     price: formModel.price as number
  //   };
  //   return saveNewOrderObj;
  // }

  // private submitNewOrder() {
  //   const newOrder = this.prepSaveNewOrder(); this.orderService.createOrder(newOrder)
  //     .subscribe(
  //       (data) => {
  //         this.openSnackBar('Order saved.');
  //         this.saveNewOrder.emit('saved');
  //         this.ngOnChanges();
  //       }
  //     ,
  //       (error) => this.openSnackBar('Error saving Order')
  //     );
  // }

  // private clearOrder() {
  //   this.ngOnChanges();
  // }

  // private openSnackBar(msg: string) {
  //   this.snackBar.open(msg, 'Close', {
  //     duration: 2000,
  //     verticalPosition: 'top'
  //   });
  // }

  // selectItem() {
  //   const itemControl = this.newOrderForm.get('item');
  //   itemControl.valueChanges.subscribe((data) => {
  //     this.selectedItem = data;
  //   });
  // }

  clearSelected() {
    this.ngOnChanges();
  }

}
