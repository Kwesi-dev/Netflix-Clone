const express = require('express');
const List = require('../models/List');
const router = express.Router();
const verify = require('../verifyToken');

//Create
router.post('/', verify, async(req, res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try{
            const list = await newList.save();
            res.status(201).json(list);
        }catch(err){
            res.status(500).json(err);
        }
        
    }else{
        res.status(403).json('You are not allowed');
    }
});
//Delete
router.delete('/:id', verify, async(req, res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("list has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed');
    }
})


//update list
router.put('/:id', verify, async(req, res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(201).json("list has been updated");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed');
    }
})


//Get All
router.get('/', verify, async(req, res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try{
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    { $sample: { size: 10}},
                    { $match : { type: typeQuery, genre: genreQuery}}
                ])
            }
            else{
                list = await List.aggregate([
                    { $sample: { size: 10}},
                    { $match : { type: typeQuery}}
                ])
            }
        }else{
            list = await List.aggregate([{ $sample: { size: 10}}]); 
        }
        res.status(200).json(list);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;