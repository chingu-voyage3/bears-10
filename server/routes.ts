module.exports = function(app, passport) {
    // app.get('/something', (req, res) => {
    //     res.json('something1')
    // })

    // app.post('/login', (req, res) => {
    // })
    const logger = (req, res) => { 
        console.log('signing up!', req) }
    app.post('/signup', logger, passport.authenticate('local-signup', {
        successRedirect : '/items', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
    }))
}