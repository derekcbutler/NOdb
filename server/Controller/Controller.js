let starList = [
    {
        id: 1,
        name: 'bright bunny'
    },
    {
        id: 2,
        name: 'rising pony'
    },
    {
        id: 3,
        name: 'the Je-ordin'
    },
    { 
        id: 4,
        name: 'Johns a D'
    },
    {
        id: 5,
        name: 'Tavas is kinda cool'
    },
    {
        id: 6,
        name: 'Matias thugin'
    }
];

module.exports = {
    getStars( req, res ) {
        res.status(200).send(starList)
    },

    addStars( req, res ) {
        const { name } = req.body;

        let id;

        if(starList.length === 0 ){
            id = 1;
        } else {
            id = starList[starList.length - 1].id + 1
        };

        const newStars = {
            id,
            name
        }

        starList.push(newStars);

      res.status(200).send(starList)  
    },

    removeStars( req, res ) {
        const { id } = req.params;
        starList = starList.filter(starList => {
            if(starList.id !== +id) return starList;
        })
        res.status(200).send(starList);
    },  

    changeName(req , res) {
        const { id, name } = req.body;
        // console.log( starList[id])
        starList[id].name = name;
        res.status(200).send(starList);
    }
};

