const anime = [
    {id: 1, anime: 'Demon Slayer', Great: true},
    {id: 2, anime: 'Jujitsu Kaisen', Great: true},
    {id: 3, anime: 'Attack on Titan', Great: true},

];

module.exports = {
    getAll,
    getOne
};


function getAll(){
    return anime;
}

function getOne(id) {
    return anime.find(anime => anime.id === parseInt(id))
}