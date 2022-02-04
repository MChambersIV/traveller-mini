const router = require('express').router();
const sequalize = require('../../config/connection');
const { Traveller, Location, Trips } =require('../../models');

router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findALL()
            
          res.status(200).json(travellerData)
        
    
    } catch (err) {
        res.status(500).json(err)
    }
});