module.exports = (mongoose) => {
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
  });

  return mongoose.model('Item', itemSchema);
};
