require('dotenv').config();

const path = require('path')
const colors = require('colors');
colors.enable();
const { PORT } = process.env;
const mongoose = require('./mongoose');

const express = require('express');
const app = express();
const usersRouter = require('./controllers/usersRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/images/:image', (request, response) => {
   const { image } = request.params
   response.sendFile(path.resolve(__dirname, 'images', image ));
});

app.use('/users', usersRouter);


app.listen(PORT, () => {
   console.log(`Listening PORT: ${PORT}`.yellow);
});