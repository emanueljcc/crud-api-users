const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Separate models use case
const TypeSchema = new Schema({
    name: String,
    value: Number,
});

const Types = mongoose.model("types", TypeSchema);

module.exports = Types;