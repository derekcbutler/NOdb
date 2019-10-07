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
    console.log(cartList[id]);
    cartList[id].name = name;
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
