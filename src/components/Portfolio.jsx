import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// portfolio images
import Akpego from "../assets/images/akpego.png";
import Dungada from "../assets/images/dungada.png";
import SendFreight from "../assets/images/sendfreight.jpg";
import PortfolioPic from "../assets/images/portfolio.png";
import ZumarocPic from "../assets/images/zumaroc.png";

class Portfolio extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 1,
      },

      1366: {
        items: 3,
      },
    },
  };
  render() {
    return (
      <section id="works" className="portfolio-section">
        <div className="container">
          <h2 className="text-center mb-5">Some Of My Works</h2>

          <div>
            <OwlCarousel
              className="owl-theme mt-3"
              loop
              autoplay
              margin={2}
              nav={true}
              // center={true}
              dots={true}
              responsive={this.state.responsive}
            >
              <div className="item">
                <div
                  style={{ backgroundImage: `url(${Akpego})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn"
                      href="https://dwallit.herokuapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Akpego(FINTECH)</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${ZumarocPic})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn"
                      href="https://zumaroc.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Zumaroc Website</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${Dungada})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn"
                      href="https://dungada.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Dungada Website</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${SendFreight})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-alt-btn me-2"
                      href="https://github.com/Ekeoma1/sendFreight"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view code
                    </a>

                    <a
                      className="pri-btn"
                      href="https://keen-nightingale-c16e99.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>
                  </div>
                </div>
                <h4 className="text-center">Send Freight Dashboard</h4>
              </div>

              <div className="item">
                <div
                  style={{ backgroundImage: `url(${PortfolioPic})` }}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-overlay">
                    <a
                      className="pri-btn me-3"
                      href="https://ekeigwee.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>

                    <a
                      className="pri-alt-btn"
                      href="https://github.com/Ekeoma1/My-portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view code
                    </a>
                  </div>
                </div>
                <h4 className="text-center">One Page Portfolio</h4>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
