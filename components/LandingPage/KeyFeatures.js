import React from "react";
import Link from "next/link";

const KeyFeatures = () => {
  return (
    <>
      <div className="features-area ptb-100 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <h2>
              Say Goodbye To Guesswork And Hello To AI Data-Driven
              Decision-Making
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon">
                  <i className="ri-eye-line"></i>
                </div>
                <h3>Easy-to-Use Ad Creation</h3>
                <p>Effortlessly design stunning ads in minutes.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg2">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>Cross-Channel Publishing</h3>
                <p>Reach your audience across Facebook, Instagram, and more.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg3">
                  <i className="ri-leaf-line"></i>
                </div>
                <h3>Smart Optimization</h3>
                <p>Maximize ad performance with intelligent algorithms.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg4">
                  <i className="ri-secure-payment-line"></i>
                </div>
                <h3>Audience Targeting</h3>
                <p>
                  Precisely reach your ideal customers with precision targeting.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg5">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>Real-Time Analytics</h3>
                <p>Gain valuable insights into your ad campaigns instantly</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>A/B Testing</h3>
                <p>
                  Test different ad variations to find the most effective one.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Budget Management</h3>
                <p>Set and monitor your ad budgets with ease</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Performance Tracking</h3>
                <p>Track key metrics to measure the success of your ads</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Ad Scheduling</h3>
                <p>
                  Schedule your ads to reach your audience at the perfect time.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Ad Rotation</h3>
                <p>
                  Automatically rotate your ad creatives for optimal exposure.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Conversion Tracking</h3>
                <p>
                  Measure and analyze the impact of your ads on conversions.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Ad Budget Optimization</h3>
                <p>Optimize your budget allocation for maximum results</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Ad Design Templates</h3>
                <p>
                  Choose from a wide selection of professionally designed ad
                  templates.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Competitor Analysis</h3>
                <p>
                  Analyze your competitors' ad strategies and stay one step
                  ahead.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-pie-chart-2-line"></i>
                </div>
                <h3>Remarketing</h3>
                <p>
                  Re-engage with previous website visitors and target them with
                  relevant ads
                </p>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
              <div className="view-more-box">
                <Link href="/features">
                  <a className="default-btn">View More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
