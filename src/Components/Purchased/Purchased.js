import React from "react";
import "./Purchased.css";

function Purchased(props) {
  return (
    <div id="body">
      <div className="row-one">
        <div className="row1-box">
            {props.e.name}
            {/* <button className="changeName" onClick={() => props.changeName(props.i)}>Edit Name</button> */}
        </div>
      </div>
    </div>
  );
}

export default Purchased;
