const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const carRouter = require("./routes/carRoute");
const inspectionRoute = require("./routes/inspectionRoute");
const centreRoute = require("./routes/centreRoute");
const userRoute = require("./routes/userRoute");
const searchRoute = require("./routes/searchRoute");
const app = express();

// Allow request from any server
app.use(
    cors({
        origin: "*", // allow requests from any other server
    })
);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
  
app.use(morgan("dev"));
app.use(bodyParser());
app.use('/', express.static('../apps/out')) 
// /settings/profile
app.use('/settings/profile', express.static('../apps/out')) 

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/inspections", inspectionRoute);
app.use("/api/v1/centres", centreRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/search", searchRoute);
app.use("/test", (req, res) => {
    res.send("helooooooo")
})
app.use(express.json());

module.exports = app;
