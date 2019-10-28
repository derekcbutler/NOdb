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

  // handleEdit = () => {
  //   const { editing } = this.state;
  //   this.setState({
  //     editing: !editing
  //   });
  // };

    deleteButton = (id, name) => {
        console.log(id, name)
        axios
        .delete(`/api/cartList/${id}`, {id, name})
        .then(res => {this.setState({cartList: res.data})})
    }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />  
        {this.state.cartList.map((e, id) => {
          return (
            <Purchased
              e={e}
              id={e.id}
              // handleEdit={this.handleEdit}
              deleteButton={this.deleteButton}
              key={`hey ${id}`}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default Cart;
