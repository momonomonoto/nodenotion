const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors')

const getRealizedTickets = require('./api/get-realized-tickets');

app.use(cors())

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/tickets/realized', getRealizedTickets)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
