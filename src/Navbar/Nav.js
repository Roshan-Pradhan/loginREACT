import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper #455a64 blue-grey darken-2">
          <Link to="/" className="brand-logo left">
            RP
          </Link>

          <ul id="nav-mobile" class="right hide-on-med-and-down ">
            <li>
              <Link to="/" className="Link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/signup" className="Link">
                SignUp
              </Link>
            </li>
            <li>
              <Link to="/signin" className="Link">
                SignIn
              </Link>
            </li>
            <li>
              <Link to="/dash" className="Link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
