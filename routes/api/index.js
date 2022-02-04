const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes.js');
const tripRoutes = require('./tripRoutes.js');

router.use('/traveller', travellerRoutes);
router.use('/trip', tripRoutes);

module.exports = router;