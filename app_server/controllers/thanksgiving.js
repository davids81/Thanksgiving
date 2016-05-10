
/* GET 'Avalilable positions page */
module.exports.availablePositions = function(req, res) {
    res.render('available-positions', {title: 'Available Positions'});
};

module.exports.accountSummary = function(req, res) {
    res.render('account-summary', {title: 'Account Summary'});
};

module.exports.newUser = function(req, res) {
    res.render('new-user-form', { title: 'New User Form' });
};