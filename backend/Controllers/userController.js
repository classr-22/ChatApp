const express = require('express');
const UserModel = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');
const generateAccessToken = require('../Config/generateToken');


const loginController = expressAsyncHandler(async(req,res) => { 

    const {name,password} = req.body;
    const user =await UserModel.findOne({name});
    if(user && (await user.matchPassword(password))){
        const response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateAccessToken(user._id)
        }
        console.log(response);
        res.json(response);
    } else {
        res.status(401);
        throw new Error("Invalid Username or password");
    }

})

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

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateAccessToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Registration Error")
    }

})



module.exports={
    loginController,
    registerController
}

