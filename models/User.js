const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   Nombres: String,
   Edad: {
      type: String,
      min: [18, "Debes ser de al menos 18, no {VALUE}"],
      max: [50, "Debes ser no mas de 50, no {VALUE}"],
   },
   Email: String,
   Direccion: String
});

// instace methods (documents)
userSchema.method('show', function() {
   const msg = this.content + ' is ' + this.important;
   console.log(msg);
});

userSchema.set('toJSON', {
   transform: function(doc, returnObj) { 
      const {__v, _id, ...rest} = returnObj;
      return {id: _id, ...rest}
   }
});

userSchema.set('toObject', {
   transform: function(doc, returnObj) {
      const {__v, _id, ...rest} = returnObj;
      return {id: _id, ...rest}
   }
});

/* (COLLECTION) */
const User = mongoose.model('User', userSchema);

module.exports = { User };