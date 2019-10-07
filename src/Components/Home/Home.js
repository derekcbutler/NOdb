import React from "react";
import Header from "../Header/Header";
import Buy from "../Buy/Buy";
import Footer from "../Footer/Footer";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      purchase: false,
      starList: []
    };
  }

  componentDidMount = () => {
    axios.get("/api/starList").then(res => {
      this.setState({ starList: res.data });
    });
  };

  buyButton = (id, name) => {
    console.log(name, id);
    axios.post("/api/cartList", {name:name, id:id});
  };

  render() {
    //   console.log(this.state)
    return (
      <div>
        <Header />
        {this.state.starList.map(e => {
          return (
            <Buy
              e={e}
              id={e.id}
              buyButton={this.buyButton}
              key={`deez nuts ${e.id}`}
            />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default Home;
