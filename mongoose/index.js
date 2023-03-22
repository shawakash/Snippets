const mongoose = require('mongoose');
const User = require('./models/User');
const mongooseUri = `mongodb+srv://akash200:220104008@cluster0.rtaqwop.mongodb.net/?retryWrites=true&w=majority`;
try {
    mongoose.connect(mongooseUri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
console.log('mongoose connected'));
}catch (e) {
    console.log(`${e}`);
}

// const user = new User({                        // created a data with model data type :: still it is stored in temproray memory
//     email: '123@gmail.com',
//     password: '12344321',
// });

// user.save().then(() => {
//     console.log('user added');
// });           // now the data is stored

async function createUser(newUser) {
    const user = new User(newUser);         //  --> in memory saved user
    const data = await user.save();        //   --> in databased saved user
    console.log('user added in database :)')
    console.log(data);
}

async function findUser() {
    // const user = await User.findOne({parameter/s})   --> returns a single object that comes first
    // const user = await User.findById({parameter/s})
    // const users = await User.find({marks: {$gte: 50}});
    const users = await User.find({email: {$regex : "ak"}})  //   --> regex substring 
    console.log(users);
}

async function updateMarks(userId, marks) {
    const user = await User.findById(userId);
    user.marks = marks;
    const updatedData = await user.save();
    console.log(updatedData);
}

async function updateUser(userId, newUserData) {
    let user = await User.findById(userId);
    user.email = newUserData.email;
    user.marks = newUserData.marks;
    user.password = newUserData.password;
    const updatedData = await user.save();
    console.log(updatedData);
}

// async function deleteUser(userId) {
//     const user = await User.findByIdAndDelete(userId);
//     if(!user) {
//         console.log('No such User');
//         return;
//     }

// }


// createUser({
//     email: 'shaw.bik2020@gmail.com',
//     password: '220104008',
//     marks: 80
// });
// findUser();
// updateMarks('641aea5f26ded39cd1168071', 99);
// updateUser('641aea5f26ded39cd1168071', {email: 'a.shaw@iitg.ac.in', password: '220104008', marks: 9.8});

// deleteUser('641aea950441f1179d9c5ff0')