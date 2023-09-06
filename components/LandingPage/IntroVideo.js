import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import Link from "next/link";

const IntroVideo = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="video-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="intro-video-content">
                <span className="sub-title">
                  Don't just take our word for it – try today and see the
                  difference for yourself
                </span>
                <h2>Where Innovation Meets Performance-Driven Advertising</h2>
                <p>
                  With MarketWiseAI, you have access to a suite of powerful
                  features designed to optimize your advertising efforts. From
                  smart audience targeting to automated optimization, our
                  platform takes your campaigns to new heights, ensuring you
                  reach the right audience at the right time. Track key metrics,
                  measure ROI, and make data-driven decisions to continuously
                  improve your advertising strategies.
                </p>

                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="intro-video-box">
                <img src="/images/video/video-img1.jpg" alt="video-img" />

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="video-btn popup-youtube"
                >
                  <i className="ri-play-line"></i>
                </div>

                <div className="shape">
                  <img
                    className="shape10"
                    src="/images/shape/shape13.png"
                    alt="image"
                  />
                  <img
                    className="shape11"
                    src="/images/shape/shape14.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default IntroVideo;
