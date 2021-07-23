// Iteration #1

const mongoose = require("mongoose")
const Schema = new mongoose.Schema()

const droneSchema = {
    name: String,
    propellers : Number,
    maxSpeed: Number
}

const droneModel = mongoose.model("drone", droneSchema)

module.exports = droneModel