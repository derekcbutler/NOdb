import React from "react";
import "./Header.css";
import {Link, Redirect} from 'react-router-dom';

class Header extends React.Component {
  // constructor() {
  //   super();

  //   // this.state(

  //   // )
  // }

  render() {
    return (
      <div>
        <nav id="nav-bar">
          <div className="logo">LINGS STARS</div>
          <div className="menu-buttons">
            <ul className="links">
              <Link to="/">Home</Link>
            </ul>
            <ul className="links">
             <Link to="/cart">Cart</Link>
            </ul>
            {/* <ul className="links">
              <li className="links-design"><Link>Virus</Link></li>
            </ul> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
