const router = require('express').Router();
const { User } = require('../models/User');

router.get('/', (request, response) => {
   User.find({})
   .then(res => {
      response.json(res);
   })
   .catch(e => response.send(e))
})

router.post('/', (request, response) => {
   const { Nombres, Edad, Email, Direccion } = request.body;
   User.create({
      Nombres,
      Edad,
      Email,
      Direccion
   })
   . then(res => response.json({ msg: "Success", new: res }))
})

router.put('/:id', (request, response) => {
   const { id } = request.params
   const { Nombres, Edad, Email, Direccion  } = request.body;
   User.findByIdAndUpdate(id, { Nombres, Edad, Email, Direccion }).then(res => {
      response.json(res)
   });
})

router.delete('/:id', (request, response) => {
   const { id } = request.params
   User.findOneAndDelete(id)
   .then(res => response.json(res))
   .catch(e => console.error(e.message));
})

module.exports = router;