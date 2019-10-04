import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();

    // this.state(

    // )
  }

  render() {
    return (
      <div>
        <nav id="nav-bar">
          <div className="logo">LINGS STARS</div>
          <div className="menu-buttons">
            <div className="links">
              <button className="links-design">Cart</button>
            </div>
            <div className="links">
              <button className="links-design">Virus</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
