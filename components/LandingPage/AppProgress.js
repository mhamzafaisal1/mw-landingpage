import React from "react";
import Link from "next/link";

const AppProgress = () => {
  return (
    <>
      <div className="new-app-progress-wrap-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-image text-center">
                <img
                  src="/images/home-7-8-9/progress/progress-2.png"
                  alt="app-img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-content">
                <span className="sub-title">
                  Discover the Future of Digital Advertising
                </span>
                <h2>Making Advertising Easy for Everyone</h2>
                <p>
                  MarketWiseAi represents our commitment to providing
                  advertisers with the wisdom and knowledge needed to navigate
                  the ever-changing digital marketing landscape. We understand
                  the challenges faced by advertisers in today's competitive
                  market, and we designed MarketWiseAI to be their trusted ally
                  in making informed choices. Gain comprehensive insights into
                  campaign performance with advanced analytics and reporting.
                  Track key metrics, measure ROI, and generate detailed reports
                  to inform your marketing strategies and drive continuous
                  improvement.
                </p>
                <p>
                  Most provabily best for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy backup just log in with
                  your mail account from.
                </p>

                <Link href="/how-it-works">
                  <a className="default-btn">Learn How It Works</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgress;
