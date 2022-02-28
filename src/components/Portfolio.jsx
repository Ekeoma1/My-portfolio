import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// portfolio images
import Akpego from "../assets/images/akpego.png";
import EBike from "../assets/images/ebike.png";
import SendFreight from "../assets/images/sendfreight.jpg";
import ZumarocPic from "../assets/images/zumaroc.png";
import weatherPic from "../assets/images/weather.png";
import LandingLight from "./../assets/images/landing-light.png";

const portfolioDetails = [
  {
    image: Akpego,
    name: "Rabbah (Fintech)",
    siteLink: "https://dwallit.herokuapp.com",
    githubLink: "https://github.com/nerdyeye/dwallit",
  },
  {
    image: ZumarocPic,
    name: "Zumaroc Website",
    siteLink: "https://zumaroc.netlify.app",
    githubLink: "https://github.com/Ekeoma1/Zumaroc",
  },
  {
    image: SendFreight,
    name: "Send Freight Dashboard",
    siteLink: "https://keen-nightingale-c16e99.netlify.app/",
    githubLink: "https://github.com/Ekeoma1/sendFreight",
  },

  {
    image: EBike,
    name: "eBike Landing Page",
    siteLink: "https://amazing-poincare-dd5401.netlify.app/",
    githubLink: "https://github.com/Ekeoma1/eBike",
  },

  {
    image: weatherPic,
    name: "weather forcast app",
    siteLink: "https://objective-davinci-7b251d.netlify.app/",
    githubLink: "https://github.com/Ekeoma1/simple-weather-app",
  },

  {
    image: LandingLight,
    name: "Payment Landing pagr",
    siteLink: "https://eke-landing-light.netlify.app/",
    githubLink: "https://github.com/Ekeoma1/landingLight",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const Portfolio = () => {
  return (
    <section id="works" className="portfolio-section">
      <div className="container">
        <h2 className="text-center mb-5">Some Of My Works</h2>

        <div>
          <Carousel responsive={responsive}>
            {portfolioDetails.map((val, index) => {
              return (
                <div key={index}>
                  <div
                    style={{ backgroundImage: `url(${val.image})` }}
                    className="portfolio-card"
                  >
                    <div className="portfolio-card-overlay">
                      <a
                        className="pri-alt-btn me-2"
                        href={val.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view code
                      </a>

                      <a
                        className="sec-btn"
                        href={val.siteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view site
                      </a>
                    </div>
                  </div>
                  <h4 className="text-center">{val.name}</h4>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
