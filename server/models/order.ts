import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IOrder extends mongoose.Document {
  item: string;
  SKU: string;
  vendor: string;
  quantity: number;
  price: number;
  orderNo: number;
  dateOrder: number;
  dateClosed: number;
}

const orderSchema = new Schema({
  item: {
    type: String
  },
  SKU: {
    type: String
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
    type: Number
  },
  dateOrder: {
    type: Number
  },
  dateClosed: {
    type: Number
  },

});


export let Order: mongoose.Model<IOrder> = mongoose.model('Order', orderSchema);
