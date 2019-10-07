import React from "react";
import "./Buy.css";

function Buy(props) {
  console.log(props.id);
  return (
    <div id="body">
      <nav>
        <div className="row-one">
          <div className="row1-box">
            {props.e.name}
            <button
              className="buy-button"
              onClick={() => props.buyButton(props.id, props.e.name)}
            >
              BUY
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Buy;
