import React, { useEffect } from "react";
import Link from "next/link";

import PricingCarousel from "./PricingCarousel";

const PricingPlanStyle1 = () => {
  return (
    <>
      <div className="pricing-area bg-gradient-color pt-100 pb-75">
        <div className="container">
          <div className="pricing-tabs">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="pricing-section-title">
                  <span className="sub-title">
                    Making Advertising Easy for Everyone
                  </span>
                  <h2>Dominate Your Market, Leave Competitors in Awe!</h2>
                  <p>
                    Reduce your ad management costs while increasing your ad
                    performance and drive more qualified leads and conversions
                    with our advanced targeting capabilities
                  </p>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <PricingCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape7">
          <img src="/images/shape/shape6.png" alt="shape" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape7.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default PricingPlanStyle1;
