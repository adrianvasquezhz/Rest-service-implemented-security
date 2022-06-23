const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
   Usuario: {
      type: String,
      unique: true,
      required: true
   },
   Password: {
      type: String,
      unique: String
   }
});

// instace methods (documents)
loginSchema.method('show', function() {
   const msg = this.content + ' is ' + this.important;
   console.log(msg);
});

loginSchema.set('toJSON', {
   transform: function(doc, returnObj) { 
      const {__v, _id, ...rest} = returnObj;
      return {id: _id, ...rest}
   }
});

loginSchema.set('toObject', {
   transform: function(doc, returnObj) {
      const {__v, _id, ...rest} = returnObj;
      return {id: _id, ...rest}
   }
});

/* (COLLECTION) */
const Login = mongoose.model('Login', loginSchema);

module.exports = { Login };