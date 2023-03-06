const express = require('express');
const router = express.Router();

//Item model

const Item = require('../../models/Item');

//@route GET api/itemes
//@desc get all items
//@access public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items))
});

//@route POST api/itemes
//@desc create an item
//@access public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/itemes/:id
//@desc delete an item
//@access public

router.delete('/:id', (req, res) => {
    console.log(req.params)
    Item.findById(req.params.id)
    .then(item => item.deleteOne(req.params).then(() => res.json({success: true})))
    .catch(err => { 
        console.log(err)
       return res.status(404).json({success: false})
    });

});

module.exports = router;

