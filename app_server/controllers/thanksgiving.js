
/* GET 'Avalilable positions page */
module.exports.availablePositions = function(req, res) {
    res.render('available-positions', {title: 'Available Positions'});
};