import React from "react";
import "./Buy.css";

class Buy extends React.Component {
  constructor() {
    super();

    // this.state(

    // )
  }

  render() {
    return (
      <div id="body">
        <nav>
          <div className="row-one">
            <div className="row1-box">
              <button className='buy-button'>BUY</button>
            </div>
            <div className="row1-box">
              <button className='buy-button'>BUY</button>
            </div>
          </div>
          <div className="row-two">
            <div className="row2-box">
              <button className='buy-button'>BUY</button>
            </div>
            <div className="row2-box">
              <button className='buy-button'>BUY</button>
            </div>
          </div>
          <div className="row-three">
            <div className="row3-box">
              <button className='buy-button'>BUY</button>
            </div>
            <div className="row3-box">
              <button className='buy-button'>BUY</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Buy;
