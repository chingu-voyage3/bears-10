module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  const orderSchema = new Schema({
    user: {
        type: Schema.ObjectId
    },
    item: {
        type: Schema.ObjectId
    },
    expectedDelivery: {
        type: Date
    },
          count: {
       type: Number
    },
    backordered: {
        type: Boolean
    },
  });

  return mongoose.model('Order', orderSchema);
};
