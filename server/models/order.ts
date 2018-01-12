const Schema = require('mongoose').Schema;

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

module.exports.order = mongoose.model('Order', orderSchema);
