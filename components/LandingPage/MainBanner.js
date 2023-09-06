import React from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const MainBanner = () => {
  return (
    <>
      <div className="new-app-main-banner-gradient-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-main-banner-gradient-content">
                <span className="sub-title">#Get Your 14 Days Free Trial</span>
                <h1>
                  Revolutionize Your Advertising Campaigns with MarketWiseAI
                </h1>
                <p>
                  Unleash the Power of Artificial Intelligence for Smarter
                  Marketing!
                </p>
                <div className="banner-btn">
                  <Link href="/app-download">
                    <a className="default-btn">Start Free Trial</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <ScrollAnimation
                animateIn="fadeInLeft"
                duration={2}
                animateOnce={true}
                initiallyVisible={true}
              >
                <div className="new-app-main-banner-gradient-image">
                  <img
                    src="/images/home-7-8-9/banner/banner-3.png"
                    alt="image"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
