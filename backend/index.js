const express = require('express');
const dotenv = require('dotenv');
const connect = require('./connection/mongodbConnection')
const userRouter = require('./Routes/userRoutes')
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const app = express();
const cors = require('cors');

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));

app.get('/', (req,res)=>{
    res.send("api is working");
})

app.use('/user', userRouter);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

connect();
app.listen(PORT, () => {
    console.log("server is running....");
})