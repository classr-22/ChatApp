const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_URI);
        console.log('server is connected to database...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connection