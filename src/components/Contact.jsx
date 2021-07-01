import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="container">
        <div className="call-to-action d-lg-flex justify-content-between align-items-center">
          <div className="call-to-action-content">
            <h5 className="action-title">have any project in mind?</h5>
            {/* <ul className="line">
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
            <p>
              If you require any of my services or want me to be part of your
              team for either a short-term project or fulltime employment click
              the button, i'm just a mail away.
            </p>
          </div>
          <div className="call-to-action-btn">
            <a className="pri-alt-btn" href="mailto:ekeigwee@gmail.com">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
