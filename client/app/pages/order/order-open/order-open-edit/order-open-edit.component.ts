import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Order } from '../../../../models/order.interface';
import { OrderService } from '../../../../core/order.service';

@Component({
  selector: 'ims-order-open-edit',
  templateUrl: './order-open-edit.component.html',
  styleUrls: ['./order-open-edit.component.scss']
})
export class OrderOpenEditComponent implements OnChanges {

  @Input() openOrder: Order;
  @Output() saveEdit = new EventEmitter;
  @Output() deleteOrder = new EventEmitter;

  editObj = {
    _id: null
  };
  checked = false;
  orderEditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
    this.createForm();
  }

  ngOnChanges() {
    this.orderEditForm.reset({
      item: { value: this.openOrder.item, disabled: this.openOrder._id !== this.editObj._id },
      sku: { value: this.openOrder.sku, disabled: this.openOrder._id !== this.editObj._id },
      vendor: { value: this.openOrder.vendor, disabled: this.openOrder._id !== this.editObj._id },
      quantity: { value: this.openOrder.quantity, disabled: this.openOrder._id !== this.editObj._id },
      price: { value: this.openOrder.price, disabled: this.openOrder._id !== this.editObj._id },
      closed: { value: this.openOrder.orderClosed, disabled: this.openOrder._id !== this.editObj._id }
    });
  }

  private createForm() {
    this.orderEditForm = this.formBuilder.group({
      item: new FormControl({ value: '', disabled: true }),
      sku: new FormControl({ value: '', disabled: true }),
      vendor: new FormControl({ value: '', disabled: true }),
      quantity: new FormControl({ value: '', disabled: true }),
      price: new FormControl({ value: '', disabled: true }),
      closed: new FormControl({ value: this.checked, disabled: true })
    });
  }

  private edit (order: Order) {
    this.editObj._id = order._id;
    this.ngOnChanges();
  }

  private cancelEdit () {
    this.editObj._id = null;
    this.ngOnChanges();
  }

  private prepSaveEdit() {
    const formModel = this.orderEditForm.value;
    const saveOrderEdit: Order = {
      _id: this.openOrder._id,
      item: formModel.item as string,
      sku: formModel.sku as string,
      vendor: formModel.vendor as string,
      quantity: formModel.quantity as number,
      price: formModel.price as number,
      orderClosed: formModel.closed as boolean,
      dateClosed: this.orderService.isClosed(formModel.closed)
    };
    return saveOrderEdit;
  }

  onSubmit() {
    this.openOrder = this.prepSaveEdit();
    this.orderService.updateOrder(this.openOrder)
      .subscribe(
        (data) => {
          this.editObj._id = null;
          this.ngOnChanges();
          this.saveEdit.emit('saved');
        },
        (error) => console.log(error)
      );
  }

}
