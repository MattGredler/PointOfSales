const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const CartSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
  }

});

// cart scheema

// This creates our model from the above schema, using Mongoose's model method
// var Item = mongoose.model('Item', ItemSchema);

// Export the Tweet model
// module.exports = Item;

// concatenated
module.exports = Cart = mongoose.model('Cart', CartSchema);
