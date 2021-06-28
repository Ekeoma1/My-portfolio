import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const navBtn = useRef();
  return (
    <nav>
      <div className="container">
        <img src={Logo} alt="my logo" />

        <ul className="list-unstyled menu-item float-end m-0 mt-1">
          <li className="d-md-inline d-none pe-4">
            <a href="#">About</a>
          </li>
          <li className="d-md-inline d-none pe-4">
            <a href="#">Services</a>
          </li>
          <li className="d-md-inline d-none pe-4">
            <a href="#">Works</a>
          </li>
          <li className="d-md-inline d-none">
            <a href="#">Reach Me</a>
          </li>
          <li className="d-sm-inline d-md-none">
            <button>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
