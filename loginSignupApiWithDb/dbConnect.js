
const MONGOOSE_URI = process.env.MONGOOSE_URI;
const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect(MONGOOSE_URI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        .then(
            (e) => console.log('Mongoose Ready')
        )
        .catch(console.error);
}