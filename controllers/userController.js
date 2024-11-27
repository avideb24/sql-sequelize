const User = require("../models/userModel");


// create new user
exports.createUser = async(req, res) => {
    const {name, userName, birthDate, address} = req.body;
    
    try{
        await User.create({
            name,
            userName,
            birthDate,
            address
        });
        res.send({status: true, message: 'User created successfully'})
    }
    catch(error){
        console.log(error);
        res.send({satus: false, message: 'User not created'})
    }

};


// get all users
exports.getAllUser = async(req, res) => {
    try{
        const users = await User.findAll();
    res.send({status:true, data: users});
    }
    catch(error){
        console.log(error);
        res.send({status: false, message: 'No data found'})
    }
};


