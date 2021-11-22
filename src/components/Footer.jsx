import React from "react";
import FooterLogo from "../assets/images/logo-alt.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <img className="mb-3 mb-lg-2" src={FooterLogo} alt="" />
          </div>

          <div className="col-lg">
            <div className="mb-3 mb-lg-0">
              <a className="footer-mail" href="mailto:ekeigwee@gmail.com">
                ekeigwee@gmail.com
              </a>
            </div>
          </div>

          <div className="col-lg">
            <a href="tel:+2348147016112" className="footer-mail mb-3 mb-lg-0">
              +2348147016112
            </a>
          </div>

          <div className="col-lg">
            <div className="mb-3 mb-lg-0">
              <a href="https://github.com/Ekeoma1">
                <GitHubIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="https://www.instagram.com/iam_eke/">
                <InstagramIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="hhtps://twitter.com/i_am_eke">
                <TwitterIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="https://facebook.com/eke.igwe1">
                <FacebookIcon className="footer-social" htmlColor="white" />
              </a>

              <a href="https://www.linkedin.com/in/eke-igwe-eke-71b63012b/">
                <LinkedInIcon className="footer-social" htmlColor="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <p className="text-center text-white m-0">
          Template designed and developed by{" "}
          <a href="hhtps://twitter.com/i_am_eke">Eke</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
