let starList = [
    {
        name: 'bright bunny'
    },
    {
        name: 'rising pony'
    },
    {
        name: 'the Je-ordin'
    },
    {
        name: 'Johns a D'
    },
    {
        name: 'Tavas is kinda cool'
    },
    {
        name: 'Matias thugin'
    },
    {
        name: 'Justin Beiber'
    },
];

module.exports = {
    getStars = (req , res) => {
        res.status(200).send(starList)
    }
    
};