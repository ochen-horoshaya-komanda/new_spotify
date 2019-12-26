const express = require('express');
const router = express.Router();
const faker = require('faker');
/* GET users listing. */
router.get('/popular', (req, res) => {
  var compositions = [         
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.nightlife()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.abstract()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.technics()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.abstract()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.fashion()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.people()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.abstract()
    },
    { 
    	"name": faker.lorem.word(),
    	"image": faker.image.business()
    }];
    

    var timeFrames = ["Today", "This week", "This month", "This year"];

	res.render('popular',{"timeFrames": timeFrames, "compositions": compositions});
});

module.exports = router;
