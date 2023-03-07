const mongoose = require('mongoose')
const { DATABASE_URL } = process.env;
exports.connectdb = () => {

    // // DATABASE CONNECTION
    mongoose.connect(DATABASE_URL);
    // Connection Events
    mongoose.connection
    .on("open", () => console.log("You are connected to MongoDB"))
    .on("close", () => console.log("You are disconnected from MongoDB"))
    .on("error", (error) => console.log(error));
}
