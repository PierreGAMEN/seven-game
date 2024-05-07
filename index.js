require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router');



app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});