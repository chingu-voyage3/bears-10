import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IOrder extends mongoose.Document {
  item: string;
  sku: string;
  vendor: string;
  quantity: number;
  price: number;
  orderNo?: number;
  dateOrder?: string;
  dateClosed?: number;
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
    type: Number
  },
  orderNo: {
    type: Number,
    index: true
  },
  dateOrder: {
    type: String
  },
  dateClosed: {
    type: Number
  },

});


export let Order: mongoose.Model<IOrder> = mongoose.model('Order', orderSchema);
