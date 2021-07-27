require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5005;
const cors = require('cors')

const getRealizationStatistic = require('./api/get-realized-tickets');

express()
    .use(cors())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.send('api method not found'))
    .get('/tickets/realization-statistic', getRealizationStatistic)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
