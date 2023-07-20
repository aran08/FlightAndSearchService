const express = require('express');
const Citycontroller = require ('../../controllers/city-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id',Citycontroller.destroy);
router.get('/city/:id',Citycontroller.get);
router.get('/city',Citycontroller.getAll);
router.patch('/city/:id',Citycontroller.update);

module.exports = router;