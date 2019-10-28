let starList = [
  {
    id: 1,
    name: "bright bunny"
  },
  {
    id: 2,
    name: "rising pony"
  },
  {
    id: 3,
    name: "the Je-ordin"
  },
  {
    id: 4,
    name: "Johns a D"
  },
  {
    id: 5,
    name: "Tavas is kinda cool"
  },
  {
    id: 6,
    name: "Matias thugin"
  }
];

let cartList = [

];

let id = 7;

module.exports = {
  getStars(req, res) {
    res.status(200).send(starList);
  },

  addStars(req, res) {
    const { name } = req.body;

    const newStars = {
      id,
      name
    };

    id++;

    starList.push(newStars);

    res.status(200).send(starList);
  },

  //////////////////CART LIST///////////////////

  getCart(req, res) {
    console.log("hit get cart");
    res.status(200).send(cartList);
  },

  removeCart(req, res) {
    const { id } = req.params;
    cartList = cartList.filter(cartList => {
      if (cartList.id !== +id) return cartList;
    });
    res.status(200).send(cartList);
  },

  changeName(req, res) {
    const { id, name } = req.body;
    let found = cartList.filter((e) => {return e.id === +id})
    let index = cartList.map((e, i) =>  {if( e.id === +id) return i})
    cartList.splice(index[0], 1)
    found[0].name = name;
    cartList.push(found[0])
    res.status(200).send(cartList);
  },

  addToCart(req, res) {
    const { id, name } = req.body;
    if (cartList.findIndex(e => e.id === +id) !== -1) {
      return res.status(200).send(cartList);
    } else {
      let newCartItem = {
        name,
        id
      };

      cartList.push(newCartItem);
      return res.status(200).send(cartList);
    }
  }
};
