const Users = require("../models/User");

// Basically conroller is where we implement the request or changes when post or get is being called   ::   Yes, it is the callback function called inside .post
const loginController = async (req, res) => {
    console.log('Login Contoller called');
    const email = req.body.email;
    const password = req.body.password;
    const user = await Users.findOne({email: email});
    if(!user){
        res.status(404).send("<h1>User Not Found</h2>");
        return;
    }
    if(user.password !== password) {
        res.status(401).send('<h2>Incorrect Password</h2>');
        return;
    }
    res.status(200).json({email: user.email});
};

const signUpController = async (req, res) => {
    console.log('SignUp Contoller called');
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password) {
        res.status(403).send("<h2>Email or Password not provided</h2>");
        return;
    }
    
    const existingUser = await Users.findOne({email: email}); 
    console.log(existingUser);           //// -------> way to get all data from
    if(existingUser) {
        res.status(409).send('<h2>User with that email exists</h2>');
        return;
    }

    // Users.find({}).then((users) => {                      
    //     console.log(users);
    // });

    const newUser = new Users({
        email,
        password
    });
    await newUser.save();
    res.status(200).json(newUser);
};

module.exports = {loginController, signUpController};