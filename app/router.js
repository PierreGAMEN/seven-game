const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const voyageController = require('./controllers/voyageController');
const hideButtonController = require('./controllers/hideButtonController');
const epreuve2Controller = require('./controllers/epreuve2Controller');
const epreuve3Controller = require('./controllers/epreuve3Controller');
const epreuve4Controller = require('./controllers/epreuve4Controller');
const digicodeController = require('./controllers/digicodeController');
const finalController = require('./controllers/finalController');

router.get('/', homeController.index)
router.get('/epreuve1', hideButtonController.index)
router.get('/epreuve2', epreuve2Controller.index)
router.get('/epreuve3', epreuve3Controller.index)
router.get('/epreuve4', epreuve4Controller.index)
router.get('/digicode', digicodeController.index)
router.get('/final', finalController.index)
router.get('/voyages', voyageController.index)
router.get('/voyages/:id', voyageController.showOne)

module.exports = router;