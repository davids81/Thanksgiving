
/* GET 'home' page */
module.exports.homeList = function(req, res) {
    res.render('index', { title: 'Home' });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function(req, res) {
    res.render('index', { title: 'Location Info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('index',  { title: 'Add Review' });
};
