import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: true,
  loop: true,
  margin: 25,
  dots: false,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  stagePadding: 100,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      stagePadding: 0,
      items: 1,
    },
    576: {
      stagePadding: 0,
      items: 1,
    },
    768: {
      stagePadding: 0,
      items: 2,
    },
    992: {
      stagePadding: 0,
      items: 3,
    },
    1200: {
      items: 2,
    },
  },
};

const ClientReviews = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <>
      <div className="new-feedback-wrap-area pb-100">
        <div className="container-fluid">
          <div className="section-title pt-5 ">
            <span className="sub-title">Real Advertisers, Real Results</span>
            <h2>What They Say About MarketWiseAi</h2>
          </div>

          {display ? (
            <OwlCarousel
              className="new-feedback-wrap-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "MarketWiseAi's platform has allowed me to create stunning ad
                  designs and run successful campaigns. It has elevated my
                  brand's presence and helped me reach a wider audience. "
                </p>
                <div className="client-info">
                  <img src="/images/user/user1.jpg" alt="user" />
                  <div className="title">
                    <h3>Jessica Wilson</h3>
                    <span>Advertiser, Velencia Fashion</span>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "I used to outsource my digital marketing, but with
                  MarketWiseAi, I have full control over my ad campaigns. It has
                  saved me money and empowered me to take charge of my marketing
                  efforts"
                </p>
                <div className="client-info">
                  <img src="/images/user/user3.jpg" alt="user" />
                  <div className="title">
                    <h3>Robert Davis</h3>
                    <span>Business Owner, Rotract Services</span>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "Using A/B testing feature, I've saved hundreds of dollars on
                  ad spend and optimized my campaigns for better results. It's a
                  must-have tool for advertisers."
                </p>
                <div className="client-info">
                  <img src="/images/user/user4.jpg" alt="user" />
                  <div className="title">
                    <h3>Mahmoud Eslam</h3>
                    <span>Advertiser, Inovital </span>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "It has become my go-to platform for managing clients' ad
                  campaigns. It's user-friendly, efficient, and delivers
                  excellent results. Highly recommended for freelancers! "
                </p>
                <div className="client-info">
                  <img src="/images/user/user4.jpg" alt="user" />
                  <div className="title">
                    <h3>Aarav Patel</h3>
                    <span>
                      Freelancer, 5+ Years of Experience as a Digital Growth
                      Hacker
                    </span>
                  </div>
                </div>
              </div>
              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "I've learned digital marketing through MarketWiseAi's
                  platform, and it has been a game-changer for my career. The
                  platform provides comprehensive training and practical tools
                  to succeed in the digital marketing world. "
                </p>
                <div className="client-info">
                  <img src="/images/user/user4.jpg" alt="user" />
                  <div className="title">
                    <h3>Laura Davis</h3>
                    <span>Marketing Executive, Decomine LLC</span>
                  </div>
                </div>
              </div>
              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "As a small business owner, I struggled to manage ads on
                  different platforms. MarketWiseAi simplified the process and
                  saved me time and money. Highly recommended!"
                </p>
                <div className="client-info">
                  <img src="/images/user/user4.jpg" alt="user" />
                  <div className="title">
                    <h3>Salim El Badr</h3>
                    <span>Owner, BD Comx</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
