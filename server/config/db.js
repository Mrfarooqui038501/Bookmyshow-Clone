const mongoose = require("mongoose")

const dbURL = process.env.DB_URL
console.log(dbURL)

const connectDB = async  () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Successsfully connected to db')
        
    } catch (err) {
        console.log("error connecting too DB", err)
    }
}

module.exports = connectDB;