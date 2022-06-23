const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env

const { User } = require('../models/User');

router.post('/', (request, response) => {

   const { username, password } = request.body;

   User.findOne({
      where: {
         username: username
      }
   })
      .then(user => {
         const passwordCorrect = password === '123';
         // if (!(user && password))
         if (!user) return response.status(401).send('No existe');
         if (!password) return response.status(401).send('Password wrong');

         if (user.disabled) return response.status(401).json({ error: 'Account disabled'})

         const userForToken = {
            id: user.id,
            username: user.username
         }

         const token = jwt.sign(userForToken, SECRET_KEY);

         response.status(200).send({ token, username: user.username, name: user.name });
      })
      .catch(err => console.log(err.message))
})

module.exports = router