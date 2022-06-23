const mongoose = require('mongoose');
const password = require('./password.js');
const connectionString = `mongodb+srv://adrianvasquez02:${password}@cluster0.nes3o.mongodb.net/?retryWrites=true&w=majority`


module.exports = mongoose.connect(connectionString)
  .then(() => {
  console.log('Mongoose(MongoDB): Database connected!'.brightGreen);
}).catch(err => {
  console.error(err)
});