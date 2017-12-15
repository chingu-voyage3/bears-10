module.exports = (mongoose) =>  {
  const Schema = require('mongoose').Schema;

  const itemCollectionSchema = new Schema({
      item: {
          type: Schema.ObjectId
      },
      user: {
          type: Schema.ObjectId
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
      }
  });

  return mongoose.model('ItemCollection', itemCollectionSchema);
};
