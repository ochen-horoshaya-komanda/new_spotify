const express = require('express');
const router = express.Router();
const faker = require('faker');
/* GET users listing. */
router.get('/popular', (req, res) => {
  var cities = [         
    { 
    	"name": faker.name.title(),
    	"id": "1"
    },
    	   { 
    	"name": faker.name.title(),
    	"id": "2"
    },
    	  { 
    	"name": faker.name.title(),
    	"id": "3"
    }];

    var timeFrames = ["Today", "This week", "This month", "This year"];

	res.render('popular',{"timeFrames": timeFrames});
});

module.exports = router;
