const { DataTypes, Model, where } = require('sequelize');
const { sequelize } = require('../util/sequelize.js');

class Note extends Model {

   whatUser = () => {
      return this.getUser().then(res => res)
   }
   
   static ads = () => {
      Note.findOne()
   }
}

module.exports = Note.init({
   content: {
      type: DataTypes.STRING,
      allowNull: false
   },
   important: {
      type: DataTypes.BOOLEAN
   },
   date: {
      type: DataTypes.DATE
   }
}, { sequelize, timestamps: false, modelName: 'note' });


class Human {
   name = 'asd';
   age = 12;

   method1() {
      return 'asd'
   }
   
   method2 = () => {
      this.name = 'xd'
   }

   asd = {
      xd: {
         fff: this
      }
   }
}

const myHuman = new Human();

// myHuman.method2();
console.log(this)
console.log(myHuman.asd.xd.fff)







const a = {
   b: {
      c: {
         d() {console.log(this)}
      }
   }
}

a.b.c.d()


const e = {
   f: {
      g: {
         h: this
      }
   }
}

// el creador de e (un objeto)
console.log(e.f.g.h)
console.log(this)