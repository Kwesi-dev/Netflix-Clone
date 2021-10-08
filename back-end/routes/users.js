const express = require('express');
const User = require('../models/User');
const cryptoJS = require('crypto-js');
const router = express.Router();
const verify = require('../verifyToken');

//Update
router.put('/:userId', verify, async(req, res)=>{
    if(req.params.userId === req.user.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();        
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {$set:req.body}, {new: true});
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(401).json(err);
        }
        
    }else{
        res.status(403).json('Hey you can only update your account!');
    }

});
//Delete
router.delete('/:userId', verify, async(req, res)=>{
    if(req.params.userId === req.user.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.userId);
            res.status(200).json("user deleted");
        }catch(err){
            res.status(401).json(err);
        }
        
    }else{
        res.status(403).json('Hey you can only delete your account!');
    }

});
//Get
router.get('/find/:userId', verify, async(req, res)=>{
        try{
            const user = await User.findById(req.user.id);
            const { password, ...info } = user._doc
            res.status(200).json({...info});
        }catch(err){
            res.status(401).json(err);
        }

});
//Get All
router.get('/', verify, async(req, res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? await User.sort({_id: -1}).find().limit(10) : await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(401).json(err);
        }       
    }else{
        res.status(403).json('Hey you are not allowed to see all users!');
    }
});
//Get User Stats
router.get('/stats', async(req, res)=>{
    const today = new Date();
    const year = today.setFullYear(today.setFullYear() -1);

    try{
        const data = await User.aggregate([
            {
                $project:{
                    month:{$month: "$createdAt"}
                }
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1}
                }
            },
        ])
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;