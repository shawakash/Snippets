const users = require("../models/User");

// Basically conroller is where we implement the request or changes when post or get is being called   ::   Yes, it is the callback function called inside .post
const loginController = async (req, res) => {
    console.log('Login Contoller called');
    const email = req.body.email;
    const password = req.body.password;
    const user = users.find(inUser => inUser.email == email);
    if(!user){
        res.status(404).send("User Not Found");
        return;
    }
    if(user.password !== password) {
        res.status(401).send('Incorrect Password');
        return;
    }
    res.status(200).json(user);
};

const signUpController = async (req, res) => {
    console.log('SignUp Contoller called');
    const email = req.body.email;
    const password = req.body.password;
    const id  = Math.floor(Math.random()*1000 +1);
    if(!email || !password) {
        res.status(403).send("Email and Password not provided");
        return;
    }
    users.forEach((user) => {
        if (user.email === email){
            res.status(409).send('User with that email exists');
            return;
        }
    });
    users.push({id, email, password})
    res.status(200).json({id,email, password});
};

module.exports = {loginController, signUpController};