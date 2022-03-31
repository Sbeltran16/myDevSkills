const anime = [
    {id: 1, anime: 'Demon Slayer', Great: true},
    {id: 2, anime: 'Jujitsu Kaisen', Great: true},
    {id: 3, anime: 'Attack on Titan', Great: true},

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};


function getAll(){
    return anime;
}

function getOne(id) {
    return anime.find(anime => anime.id === parseInt(id))
}

function create(animes){
    animes.id = Date.now() % 100000;

    animes.done = false;
    anime.push(animes);
}

function deleteOne(id) {
    const idx = anime.findIndex(anime => anime.id === parseInt(id));
    anime.splice(idx, 1);
}
