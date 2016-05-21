
/* GET 'Avalilable positions page */
module.exports.availablePositions = function(req, res) {
    res.render('available-positions', {title: 'Available Positions'});
};

module.exports.accountSummary = function(req, res) {
    res.render('account-summary', {
        title: 'Account Summary',
        account: {
            name: 'Penny',
            email: 'penny@penny.gmail.com',
            registrants: [
                {
                    name: 'Sheldon Cooper',
                    positionName: 'Server',
                    positionTime: '12:00pm - 1:30pm',
                    positionDescription: 'Serve people, duh'
                },
                {
                    name: 'Leonard Hofstadter',
                    positionName: 'Beverages',
                    positionTime: '10:30pm - 12:00pm',
                    positionDescription: 'Keep the cups full'
                },
                {
                    name: 'Howard Wolowitz',
                    positionName: 'Pies',
                    positionTime: '1:00pm - 2:30pm',
                    positionDescription: 'In their faces!!'
                },
                {
                    name: 'Raj Koothrappali',
                    positionName: 'Driver',
                    positionTime: 'All day',
                    positionDescription: 'Heavy equipment operations'
                }
            ]
        }
    });
};

module.exports.newUser = function(req, res) {
    res.render('new-user-form', { title: 'New User Form' });
};

module.exports.signIn = function(req, res) {
   res.render('sign-in-form', { title: 'Sign in'});
};

module.exports.createAccount = function(req, res) {
    console.log("it's working");
    res.render('create-account-form', { title: 'Create New Account' });
};

module.exports.signInRouter = function(req, res) {
    console.log('it\'s working');
    console.log(req.body);
    console.log(req.body.action);
    if (req.body.action === 'createaccount') {
        res.render('create-account-form');
    } else {
        res.render('account-summary', {
        title: 'Account Summary',
        account: {
            name: 'Penny',
            email: 'penny@penny.gmail.com',
            phone: '',
            registrants: [
                {
                    name: 'Sheldon Cooper',
                    positionName: 'Server',
                    positionTime: '12:00pm - 1:30pm',
                    positionDescription: 'Serve people, duh'
                },
                {
                    name: 'Leonard Hofstadter',
                    positionName: 'Beverages',
                    positionTime: '10:30pm - 12:00pm',
                    positionDescription: 'Keep the cups full'
                },
                {
                    name: 'Howard Wolowitz',
                    positionName: 'Pies',
                    positionTime: '1:00pm - 2:30pm',
                    positionDescription: 'In their faces!!'
                },
                {
                    name: 'Raj Koothrappali',
                    positionName: 'Driver',
                    positionTime: 'All day',
                    positionDescription: 'Heavy equipment operations'
                }              
            ]
        }
    });    
    }
};