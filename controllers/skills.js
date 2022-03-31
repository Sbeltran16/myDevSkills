const animes = require('../models/skills');



module.exports = {
    index,
    show,
    new: newAnimes,
    create,
    delete: deleteAnimes
    
}

function index(req, res) {

    res.render('skills/index', {
        skills: animes.getAll()
    })
}

function show(req, res) {
    console.log(req.params, "<- req.paramas in show function")
    res.render('skills/show', {
        animeNum: req.params.id,
        anime: animes.getOne(req.params.id)
    })
}

function create(req, res){
    console.log(req.body, '<- req.body, contents of the form')
    animes.create(req.body)
    res.redirect('/skills');
}

function newAnimes(req, res){
    res.render('skills/new')
}

function deleteAnimes(req, res) {
    console.log(req.params.id, '<- this is id of the anime we are deleting');
    animes.deleteOne(req.params.id)
    res.redirect('/skills');
}