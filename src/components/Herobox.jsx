import React from "react";
import HeroBg from "../assets/images/hero-image.png";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

const Herobox = () => {
  return (
    <div className="hero-box">
      <div className="row p-0 m-0 align-items-center">
        <div className="col p-0">
          <div
            style={{ backgroundImage: `url(${HeroBg})` }}
            className="hero-pic-wrapper"
          >
            <div className="hero-pic-overlay">
              <div className="container">
                {/* mobile hero details */}
                <div className="d-md-none d-sm-block text-end text-capitalize text-white">
                  <h3>
                    Hello !<br />i am a front end developer
                  </h3>

                  <h2 className="mt-3 mb-0">my name is</h2>
                  <h1 className="mb-0">eke igwe eke</h1>

                  <div className="mt-5">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="pri-alt-btn"
                      href="https://eke-igwe-resume.netlify.app/"
                    >
                      <PlayForWorkIcon className="animate__animated animate__slideInDown" />
                      View my CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col d-none d-md-block">
          <div className="text-end text-capitalize desktop-hero-details">
            <div>
              <h3>
                Hello !<br />i am a front end developer
              </h3>

              <h2 className="mt-3 mb-0">my name is</h2>
              <h1 className="mb-0">eke igwe eke</h1>

              <div className="mt-5">
                <a
                  className="pri-btn"
                  rel="noreferrer"
                  target="_blank"
                  href="https://eke-igwe-resume.netlify.app/"
                >
                  <PlayForWorkIcon className="animate__animated animate__slideInDown" />
                  View My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobox;
