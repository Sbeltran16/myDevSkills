const animes = require('../models/skills');



module.exports = {
    index,
    show
}

function index(req, res) {

    res.render('skills/index', {
        skills: animes.getAll()
    })
}

function show(req, res) {
    
    res.render('skills/show', {
        animeNum: req.params.id,
        anime: animes.getOne(req.params.id)
    })
}