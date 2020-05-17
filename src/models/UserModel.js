const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Separate models use case
const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: false,
        required: true,
        maxlength: 100
    },
    lastName: {
        type: String,
        trim: false,
        required: true,
        maxlength: 100
    },
    gender: {
        type: String,
        trim: true,
        uppercase: false,
        required: false,
        maxlength: 1
    },
    phone: {
        type: String,
        trim: true,
        required: false,
        maxlength: 50
    },
    phoneType: {
        type: Number,
        trim: true,
        required: false,
        maxlength: 100
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255,
        unique: true
    },
    createAt: Date
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
