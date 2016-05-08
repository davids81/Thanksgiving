
/* GET 'home' page */
module.exports.homeList = function(req, res) {
    res.render('locations-list', 
    { 
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapLine: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            rating: 4
        },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            rating: 5  
        },{
            name: 'Burger King',
            address: '125 High Street, Reading, RG6 1PS',
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            rating: 2  
        }]
    });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', { 
        title: 'Location Info',
        pageHeader: { title: 'Starcups' },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to siet down with you rlaptop and get some work done',
            callToAction: 'If you\'ve  been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
            coords: {lat: 51.455041, lng: -0.9690554},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            },{
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.  Coffee wasn\'t great, but the wifi was fast'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form',  { title: 'Add Review' });
};

