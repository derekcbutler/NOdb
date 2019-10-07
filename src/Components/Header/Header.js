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
            <div className="links">
              <Link to="/"><button className='links-design'>Home</button></Link>
            </div>
            <div className="links">
             <Link to="/cart"><button className='links-design'>Cart</button></Link>
            </div>
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
