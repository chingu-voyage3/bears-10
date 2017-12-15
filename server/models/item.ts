const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: {
    type: String
  },
  ID: {
    type: String
  },
  sellable: {
    type: Boolean
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
    type: Boolean
  },
  count: {
    type: Number
  },
  reorderedCount: {
    type: Number
  },
  orderNeeded: {
    type: Boolean
  },
  orderPlaced: {
    type: Boolean
  },
  backordered: {
    type: Boolean
  },
  expectedDelivery: {
    type: Date
  }
});

module.exports.Item = mongoose.model('Item', itemSchema);
