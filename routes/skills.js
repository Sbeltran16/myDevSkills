var express = require('express');
var router = express.Router();
const animeController = require('../controllers/skills')

/* GET users listing. */
router.get('/', animeController.index); // 
// localhost:3000/todos/12345
// :id is called params

router.get('/new', animeController.new);

router.post('/', animeController.create);

router.delete('/:id', animeController.delete);

router.get('/:id', animeController.show);



module.exports = router;
