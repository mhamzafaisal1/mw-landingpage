import React from "react";
import Link from "next/link";

const AppProgressStyle1 = ({ heading, para1, para2, img }) => {
  return (
    <>
      <div className="app-progress-area pb-5 pt-2 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-image text-center">
                <img src="/images/app/app-img2.png" alt="app-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content">
                <span className="bigTitle">{heading}</span>
                <p>{para1}</p>
                <p>{para2}</p>

                <Link href="/app-download">
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

export default AppProgressStyle1;
