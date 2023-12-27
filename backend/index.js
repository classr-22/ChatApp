const express = require('express');
const dotenv = require('dotenv');
const connect = require('./connection/mongodbConnection')
const userRouter = require('./Routes/userRoutes')
const app = express();

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res)=>{
    res.send("api is working");
})

app.use('/user', userRouter);

connect();
app.listen(PORT, () => {
    console.log("server is running....");
})