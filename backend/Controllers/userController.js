const express = require('express');
const UserModel = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');

const loginController = () => { }

const registerController = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {  
        res.send(400);
        console.log("All necessary input field have not been filled");
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        throw new Error("user already exists");
    }

    const userNameExist = await UserModel.findOne({ name });
    if (userNameExist) {
        throw new Error("username already taken");
    }

    const user = await UserModel.create({ name, email, password });
})

