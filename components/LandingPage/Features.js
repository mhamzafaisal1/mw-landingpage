import React from "react";

import dynamic from "next/dynamic";
const SocialMediaCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    450: {
      items: 3,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
    1200: {
      items: 7,
    },
  },
};

const Features = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <>
      <div className="features-area pt-75 pb-75">
        <div className="container">
          <div className="featuresHeading">
            <h1>Integrations</h1>
            <p className="featuresPara">
              With powerful integrations with Google, META, and other leading
              social platforms, MarketWiseAI provides seamless connectivity to
              your ad accounts. Easily manage and optimize your campaigns from a
              single platform, saving time and streamlining your advertising
              efforts
            </p>
          </div>
          <div className="col-lg-10 col-md-12 carouselContainer customMarginTop">
            {display ? (
              <SocialMediaCarousel
                className="trusted-by-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="item">
                  <img src="/images/social-media/facebook.svg" alt="partner" />
                </div>
                <div className="item">
                  <img
                    src="/images/social-media/instagram.webp"
                    alt="partner"
                  />
                </div>
                <div className="item">
                  <img src="/images/social-media/google.webp" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/linkedin.webp" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/twitter.webp" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/youtube.webp" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/whatsapp.png" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/tiktok.webp" alt="partner" />
                </div>
                <div className="item">
                  <img src="/images/social-media/snapchat.webp" alt="partner" />
                </div>
                <div className="item">
                  <img
                    src="/images/social-media/wordpress.webp"
                    alt="partner"
                  />
                </div>
                <div className="item">
                  <img src="/images/social-media/shopify.png" alt="partner" />
                </div>
                <div className="item">
                  <img
                    src="/images/social-media/woocommerce.webp"
                    alt="partner"
                  />
                </div>
                <div className="item">
                  <img
                    src="/images/social-media/mailchimp.webp"
                    alt="partner"
                  />
                </div>
              </SocialMediaCarousel>
            ) : (
              ""
            )}
          </div>
          {/* <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-award-line"></i>
                                </div>
                                <h3>Award Winning App</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Privacy Protected</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-vip-diamond-line"></i>
                                </div>
                                <h3>Lifetime Update</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Features;
