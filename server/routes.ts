module.exports = function(app, passport) {
    app.get('/something', (req, res) => {
        res.json('something1')
    })

    // app.post('/login', (req, res) => {
    // })
}