import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

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
  }
});

export let Item = mongoose.model('Item', itemSchema);


