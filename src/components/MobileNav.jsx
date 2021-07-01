import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const MobileNav = () => {
  return (
    <div>
      <ul className="list-unstyled float-start">
        <li className="pb-3">
          <a href="#">About</a>
        </li>
        <li className="pb-3">
          <a href="#">Services</a>
        </li>
        <li className="pb-3">
          <a href="#">Works</a>
        </li>
        <li className="pb-3">
          <a href="#">Reach Me</a>
        </li>
      </ul>

      <div className="float-end">
        <div className="mb-3">
          <a href="https://github.com/Ekeoma1">
            <GitHubIcon className="mobile-nav-social" />
          </a>
        </div>
        <div className="mb-3">
          <a href="https://www.instagram.com/iam_eke/">
            <InstagramIcon className="mobile-nav-social" />
          </a>
        </div>
        <div className="mb-3">
          <a href="hhtps://twitter.com/i_am_eke">
            <TwitterIcon className="mobile-nav-social" />
          </a>
        </div>
        <div className="mb-3">
          <a href="https://facebook.com/eke.igwe1">
            <FacebookIcon className="mobile-nav-social" />
          </a>
        </div>

        <div className="mb-3">
          <a href="https://www.linkedin.com/in/eke-igwe-eke-71b63012b/">
            <LinkedInIcon className="mobile-nav-social" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
