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
//@desc create a post
//@access public

router.get('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});
module.exports = router;

