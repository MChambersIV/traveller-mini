const router = require('express').router();
const sequalize = require('../../config/connection');
const { Traveller, Locations, Trips } =require('../../models');

router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findALL({
            include: [{ model: Locations}, {model: Trips}],
            attributes: {
                include: [
                    [
                        sequalize.literal(
                            'SELECT SUM(trips) FROM car'
                        )
                    ]
                ]
            }
        })
    }
})