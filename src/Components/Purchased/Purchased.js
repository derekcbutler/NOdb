import React from "react";
import "./Purchased.css";
import axios from "axios";

class Purchased extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      name: ""
    };
  }

  // edit = () => {
  //   this.setState({
  //       editing: !this.state.editing
  //   })

  // }

  handleInput = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleEdit = () => {
    const { id } = this.props;
    const { name } = this.state;

    axios.put("/api/cartList", { id, name }).then(res => 
      this.setState({
        name: res.data[0].name
      })
    );
    
  };

  render() {
    console.log(this.state);
    return (
      <div id="body">
        <div className="row-one">
          {this.state.editing ? (
            <div className="row1-box">
              <input
                name="name"
                value={this.state.name}
                onChange={e => this.handleInput(e)}
              />
              <button>save</button>
            </div>
          ) : (
            <div className="row1-box">
              <input 
               name="name"
               value={this.state.name}
              onChange={e => this.handleInput(e)} />
              <button
                className="delete"
                onClick={() => this.handleEdit()}
              >
                Edit{" "}
              </button>
              {/* <input /> */}
              {this.props.e.name}
              <button
                className="delete"
                onClick={() =>
                  this.props.deleteButton(this.props.id, this.props.e.name)
                }
              >
                {" "}
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Purchased;
