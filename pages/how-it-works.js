import React from "react";
import NavbarStyleOne from "@/components/LandingPage/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";
import KeyFeatures from "@/components/LandingPage/KeyFeatures";
import AppScreenshotsStyle1 from "@/components/AppScreenshots/AppScreenshotsStyle1";
import FreeTrialStyle1 from "@/components/Common/FreeTrialStyle1";

const HowItWorks = () => {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Getting Started with MarketWiseAI"
        homePageUrl="/"
        homePageText="Your Beginner's Guide to Ad Campaign Success"
        activePageText="How It Works"
      />

      <div className="how-it-works-area ptb-100">
        <div className="container">
          <div className="how-it-works-content">
            <div className="number">1</div>

            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 1</h3>
                  <span>Sign-Up</span>
                </div>
              </div>

              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Create your MarketWiseAI account in just a few simple steps.
                    Sign up and gain access to our powerful ad campaign
                    management platform.
                  </p>
                  <img
                    src="/images/how-it-works/create-account.jpg"
                    alt="create-account"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">2</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 2</h3>
                  <span>Connect Your Ad Accounts</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Easily connect your Facebook Ads, Instagram Ads, Google Ads,
                    and more. Our platform seamlessly integrates with major ad
                    networks, giving you centralized control over your campaigns
                  </p>
                  <img
                    src="/images/how-it-works/select-coin.jpg"
                    alt="select-coin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">3</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 3</h3>
                  <span>Set Up Your Campaigns</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Create new ad campaigns or import existing ones. Define your
                    target audience, set budgets, and choose ad formats.
                    MarketWiseAI's intuitive interface makes campaign setup a
                    breeze
                  </p>
                  <img
                    src="/images/how-it-works/select-payment.jpg"
                    alt="select-coin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">4</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 4</h3>
                  <span>Optimize for Success</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Let our smart optimization algorithms work their magic. Our
                    platform continuously analyzes data to optimize targeting,
                    bidding, and creative elements. Sit back and watch your
                    campaigns thrive.
                  </p>
                  <img
                    src="/images/how-it-works/payment-method.jpg"
                    alt="select-coin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">5</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 5</h3>
                  <span>Monitor and Analyze</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Stay on top of your ad performance with our robust analytics
                    dashboard. Track key metrics, monitor conversions, and gain
                    valuable insights to further refine your campaigns.
                  </p>
                  <img
                    src="/images/how-it-works/confirm-order.jpg"
                    alt="select-coin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">6</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 6</h3>
                  <span>Scale and Grow</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    As you gain confidence and see the impact of MarketWiseAI,
                    scale your ad campaigns and unlock new growth opportunities.
                    Our platform is designed to support your business's
                    expansion.
                  </p>
                  <img
                    src="/images/how-it-works/select-coin.jpg"
                    alt="select-coin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">7</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 7</h3>
                  <span>Enjoy Results</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Experience the power of MarketWiseAI as your ad campaigns
                    drive meaningful results. From increased brand visibility to
                    higher conversions, our platform helps you achieve success.
                  </p>
                  <img
                    src="/images/how-it-works/payment-method.jpg"
                    alt="payment-method"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppScreenshotsStyle1 />

      <KeyFeatures />

      <FreeTrialStyle1 />

      <FooterStyleTwo />
    </>
  );
};

export default HowItWorks;
