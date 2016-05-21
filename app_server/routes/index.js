var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main.js');

var ctrlLocations = require('../controllers/locations.js');
var ctrlOthers = require('../controllers/others.js');

var ctrlThanksgiving = require('../controllers/thanksgiving.js');

/* Location Pages */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

/* Thanksgiving Pages */
router.get('/availablepositions', ctrlThanksgiving.availablePositions);
router.get('/accountsummary', ctrlThanksgiving.accountSummary);
router.get('/newuser', ctrlThanksgiving.newUser);
router.get('/signin', ctrlThanksgiving.signIn);
router.get('/newAccount', ctrlThanksgiving.signIn);
router.post('/signInRouter', ctrlThanksgiving.signInRouter);

module.exports = router;


