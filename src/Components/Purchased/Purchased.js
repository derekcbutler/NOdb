import React from "react";
import "./Purchased.css";

class Purchased extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      input: ""
    };
  }

  edit = () => {
    this.setState({
        editing: !this.state.editing
    })

  }

  onChange= e => {
    let {name, value} = e.target
    this.setState({
        [name]: value
    })
  }

  render() {
      console.log(this.state)
    return (
      <div id="body">
        <div className="row-one">
          {this.state.editing ? (
            <div className="row1-box">
              <input name='input' value={this.state.input} onChange={(e) => this.onChange(e)} />
              <button>save</button>
            </div>
          ) : (
            <div className="row1-box">
              <button
                className="delete"
                onClick={() => this.props.handleEdit(this.props.e.name)}
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
