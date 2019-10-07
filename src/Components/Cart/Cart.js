import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Purchased from "../Purchased/Purchased";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: "",
      name: false,
      editing: false,
      cartList: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/cartList")
      .then(res => this.setState({ cartList: res.data }));
  };

  handleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

    deleteButton = (index) => {
        axios.post('/api/cartList', {index}).then(res => {this.setState({})})
    }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        {this.state.cartList.map((e, i) => {
          return (
            <Purchased
              e={e}
              i={i}
              handleEdit={this.handleEdit}
              key={`hey ${i}`}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default Cart;
