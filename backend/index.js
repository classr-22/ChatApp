const express = require('express');
const dotenv = require('dotenv');
const connect = require('./connection/mongodbConnection')
const userRouter = require('./Routes/userRoutes')
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("api is working");
})

app.use('/user', userRouter);

connect();
app.listen(PORT, () => {
    console.log("server is running....");
})