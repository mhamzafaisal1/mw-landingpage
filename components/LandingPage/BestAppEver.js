import React from "react";
import Link from "next/link";

const BestAppEver = () => {
  return (
    <>
      <div className="app-ever-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content with-left-zero">
                <h2>Be Your Own Digital Marketing Agency</h2>
                <p>
                  With MarketWiseAI, you become the master of your own digital
                  marketing destiny. Our platform empowers you to take full
                  control of your ad campaigns, enabling you to create, manage,
                  and optimize your ads like a seasoned marketing professional.
                </p>

                <ul className="list">
                  <li>
                    <div className="icon bg3 rounded-circle">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Reduce Ad Management Costs by 65%:</h3>
                    <p>
                      MarketWiseAI provides an intuitive interface and powerful
                      tools that guide you through the process, making it
                      accessible for beginners and experienced marketers alike
                    </p>
                  </li>
                  <li>
                    <div className="icon rounded-circle">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Boost Your ROAS by 35%</h3>
                    <p>
                      AI Algorithms and Critical Analytics for Maximum Returns!
                      Harness the power of AI-driven algorithms and
                      comprehensive analytics to supercharge your return on ad
                      spend (ROAS).
                    </p>
                  </li>
                  <li>
                    <div className="icon bg3 rounded-circle">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h3>Startup-Friendly</h3>
                    <p>
                      We understand the challenges startups face in their early
                      stages. MarketWiseAI is designed to be cost-effective and
                      results-driven, allowing startups to optimize their
                      advertising efforts and achieve significant ROI
                    </p>
                  </li>
                </ul>
                <div className="btn-box">
                  <Link href="/app-download">
                    <a className="default-btn">Start Free Trial</a>
                  </Link>
                  <Link href="/features-1">
                    <a className="link-btn">Explore All Features</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-wrap-image">
                <img
                  src="/images/home-7-8-9/app-ever/app-ever-2.png"
                  alt="image"
                />
                <div className="wrap-shape">
                  <img
                    src="/images/home-7-8-9/app-ever/shape-2.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
