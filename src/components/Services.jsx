import React, { useEffect } from "react";
import Icon from "./Icon";
import Tilt from "react-parallax-tilt";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center text-capitalize">
          <h2>Services</h2>
          <p className="pri-color">What I Offer</p>
        </div>
        <div className="service-card-wrapper mt-5">
          <Tilt>
            <div className="service-card mx-auto mb-5" data-aos="slide-right">
              <div>
                <Icon icon="frontend" />
                <h4 className="mt-3 mb-3">
                  Front End <br />
                  Development
                </h4>
                <p>
                  I bring web design concepts and ideas to life with the right
                  tools and ensure that they are mobile responsive.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="service-card mx-auto mb-5" data-aos="slide-up">
              <div>
                <Icon icon="wp-alt" />
                <h4 className="mt-3 mb-3">
                  Wordpress <br />
                  Customisation
                </h4>
                <p>
                  I use wordpress to develop simple websites ranging from
                  E-commerce, to business, personal, etc very fast using the
                  right templates and plugins.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="service-card mx-auto mb-5" data-aos="slide-left">
              <div>
                <Icon icon="coach" />
                <h4 className="mt-3 mb-3">
                  Tutoring &<br />
                  Coaching
                </h4>
                <p>
                  I use my experience and knowelege to guide and offer whatever
                  aid within my power to help beginners or anyone who is
                  insterested in switching to the tech space
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Services;
