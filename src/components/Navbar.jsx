import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navBtn = useRef();
  const closeNavBtn = useRef();
  const mobileNavMenu = useRef();

  const showMobileNav = () => {
    // shows the mobile menu
    mobileNavMenu.current.classList.remove("d-none");
    mobileNavMenu.current.classList.add("d-sm-block");

    // removes the nav btn and show close btn
    navBtn.current.classList.add("d-none");
    closeNavBtn.current.classList.remove("d-none");
  };

  const hideMobileNav = () => {
    // hide the mobile menu
    mobileNavMenu.current.classList.add("d-none");
    mobileNavMenu.current.classList.remove("d-sm-block");

    // show the nav btn and hide close btn
    navBtn.current.classList.remove("d-none");
    closeNavBtn.current.classList.add("d-none");
  };
  return (
    <nav>
      <div className="container">
        <img src={Logo} alt="my logo" />

        <ul className="list-unstyled menu-item float-end m-0 mt-1">
          <li className="d-md-inline d-none pe-4">
            <a href="#about">About</a>
          </li>
          <li className="d-md-inline d-none pe-4">
            <a href="#services">Services</a>
          </li>
          <li className="d-md-inline d-none pe-4">
            <a href="#works">Works</a>
          </li>
          <li className="d-md-inline d-none">
            <a href="#contact">Reach Me</a>
          </li>
          <li className="d-sm-inline d-md-none d-sm-block">
            <button ref={navBtn} onClick={showMobileNav}>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </div>

      {/* mobile nav */}

      <div
        ref={mobileNavMenu}
        className="mobile-nav d-md-none d-none animate__animated animate__fadeInLeft"
      >
        <button
          ref={closeNavBtn}
          className="d-none mobile-nav-close-btn"
          onClick={hideMobileNav}
        >
          <CloseIcon />
        </button>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
