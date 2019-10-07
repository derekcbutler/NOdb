import React from "react";
import "./Purchased.css";

function Purchased(props) {
  return (
    <div id="body">
      <div className="row-one">
        <div className="row1-box">
            <button className="delete" onClick={() => props.handleEdit(props.e.name)}>Edit  </button>
            {props.e.name}
           <button className="delete" onClick={() => props.deleteButton(props.id, props.e.name)}>  Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Purchased;
