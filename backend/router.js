let express = require("express");
let router = express.Router();

// HOMEPAGE
router.get('/', (req, res, next) => {
    //res.render("index.html");
    console.log('here');
})

// ANIMATION
router.get('/animation', (req, res) => {
    //res.send('Hello World!')
    res.render('animation.html');
})

// LIVE ACTION
router.get('/liveaction', (req, res) => {
    res.render("liveaction.html");
})


// ABOUT
router.get('/about', (req, res) => {
    res.render("about.html");
})


// 404
router.use((req, res, next) => {
    const error = new Error("Page non trouvée"); //normalement renvoyée une page HTML
    error.statut = 404;
    next(error);
})

//nouvelle route qui récupère l'error 
router.use((req, res, response) => { 
    res.status(error.status || 500) // mettre statut 404 SINON  (||) 500
    res.end(error.message);
})

module.exports = router;