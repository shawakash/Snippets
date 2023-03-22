const mongoose = require('mongoose');

const userSchema = mongoose.Schema({             // basically a format
    email: String,
    password: String,
    marks: Number
});

module.exports = mongoose.model('user', userSchema);