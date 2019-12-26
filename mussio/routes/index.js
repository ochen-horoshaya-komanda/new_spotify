const express = require('express');
const router = express.Router();
const faker = require('faker');

module.exports = router;

router.get('/ads', (req, res) => {
    var ads = 
    	[{
    		"name": faker.name.title(),
    		"image": faker.image.nightlife()
    	},
    	{
    		"name": faker.name.title(),
    		"image": faker.image.nightlife()
    	},
    	{
    		"name": faker.name.title(),
    		"image": faker.image.nightlife()
    	}];
 
res.render('index',{"ads": ads});
 }); 

