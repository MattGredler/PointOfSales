const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const ItemSchema = new Schema({
  name: {
    type: String,
    required: "You must include some content in your note"
  },
  price: {
    type: Number,
    required: "You must include some content in your note"
  }

});

// cart scheema

// This creates our model from the above schema, using Mongoose's model method
var Item = mongoose.model('Item', ItemSchema);

// Export the Tweet model
module.exports = Item;
