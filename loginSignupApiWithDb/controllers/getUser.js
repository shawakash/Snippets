const users = require("../models/User");

const getUserController = (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(403).send('User Id Not Passed :(');
        return;
    }
    const user = users.find(userList => userList.id == id);
    if(!user) {
        res.status(404).send('User Not Found :(');
        return;
    }
    res.status(200).json(user);
};

module.exports = {getUserController}