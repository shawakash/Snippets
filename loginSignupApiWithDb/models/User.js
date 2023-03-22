// files used bu mongoose schema
// const users = [{
//     id: '4',
//     email: 'anuj@gmail.com',
//     password: '123'
// }, {
//     id: '45456',
//     email: 'juna@gmail.com',
//     password: '321'
// },];

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: String
},{
    timestamps: true,
});


module.exports = mongoose.model('users', userSchema);