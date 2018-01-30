import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface IItem extends mongoose.Document {
  name: string;
  SKU: string;
  sellable: boolean;
  retailPrice: number;
  orderPrice: number;
  manufacturer: string;
  description: string;
  size: string;
  taxExempt: boolean;
  count: number;
  reorderedCount: number;
  orderNeeded: boolean;
  orderPlaced: boolean;
  backordered: boolean;
  expectedDelivery: Date;
  categories: [string];
}

const itemSchema = new Schema({
  name: {
    type: String
  },
  SKU: {
    type: String
  },
  sellable: {
    type: Boolean,
    default: true
  },
  retailPrice: {
    type: Number
  },
  orderPrice: {
    type: Number
  },
  manufacturer: {
    type: String
  },
  description: {
    type: String
  },
  size: {
    type: String
  },
  taxExempt: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number
  },
  reorderedCount: {
    type: Number,
    default: 0
  },
  orderNeeded: {
    type: Boolean,
    default: false
  },
  orderPlaced: {
    type: Boolean,
    default: false
  },
  backordered: {
    type: Boolean,
    default: false
  },
  expectedDelivery: {
    type: Date
  },
  categories: {
    type: [String]
  }
});

export let Item: mongoose.Model<IItem> = mongoose.model('Item', itemSchema);


