// require is how we import code. NPM install does these npm install -- safe (package)
const express = require('express');
// transalator bw mongo and js
const mongoose = require('mongoose');
// heroku has env port that assings port
const PORT = process.env.PORT || 3001;
// function call site replaced by return value
const app = express();

// always include allows to receive json's
app.use(express.urlencoded({ extended: true }));
// stores on req.body
app.use(express.json());
// tell were to find public files
app.use(express.static("public"));

// these go above mongoose connect
require('./routes/api/item')(app);

require('./routes/api/cart')(app);
//
mongoose.connect('mongodb://localhost/maurices', { useNewUrlParser: true });

//


// Tells server what port to listen to
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});
