import React from "react";
import Icon from "./Icon";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-center">About Me</h2>

        <div className="row">
          <div className="col-lg-5 mt-5">
            <div>
              <p>
                I'm Eke Igwe Eke a front end developer based in Lagos, Nigeria
                with a B.Sc in public administration from Madonna University,
                who started coding in 2019.
              </p>

              <p>
                I specialize in building the front end of web applications and
                ensuring that they are responsive across all devices. I'm always
                exicted about working on projects, especially projects that are
                new to me because it pushes me out of my comfort zone and it
                enables me learn more.
              </p>

              <p>
                I'm consistently working towards improving my skillset to meet
                my clients needs, besides i believe learning never ends.
              </p>

              <p>
                I can work very well on my own and also love working with a
                team, I'm passionate about meeting people and impacting their
                lives. I love music and travelling.
              </p>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="skill-box-wrapper">
              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="wordpress" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">Wordpress</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="html" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">HTML5</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="css" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">CSS3</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="bootstrap" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">Bootstrap</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="js" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">JavaScript</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="react" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
