const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')

const carRouter = require('./routes/carRoute')
const inspectionRoute = require('./routes/inspectionRoute')
const centreRoute = require('./routes/centreRoute')
const userRoute = require('./routes/userRoute')
const app = express();

app.use(morgan("dev"));
app.use(bodyParser())

// use static built frontend
app.use('/', express.static('../apps/out'))

app.use('/api/v1/cars', carRouter);
app.use('/api/v1/inspections', inspectionRoute);
app.use('/api/v1/centres', centreRoute)
app.use('/api/v1/users', userRoute)

app.get('/test', (req, res) => {
    return res.send("Hello")
})
module.exports = app;