import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IOrder extends mongoose.Document {
  item: string;
  sku: string;
  vendor: string;
  quantity: number;
  price: string;
  orderNo?: number;
  dateOrder?: string;
  orderClosed?: boolean;
  dateClosed?: string;
}

const orderSchema = new Schema({
  item: {
    type: String
  },
  sku: {
    type: String,
    index: true
  },
  vendor: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
    type: String
  },
  orderNo: {
    type: Number,
    index: true
  },
  dateOrder: {
    type: String
  },
  orderClosed: {
    type: Boolean
  },
  dateClosed: {
    type: String
  }

});


export let Order: mongoose.Model<IOrder> = mongoose.model('Order', orderSchema);
