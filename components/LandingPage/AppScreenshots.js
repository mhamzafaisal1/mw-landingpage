// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const AppScreenshots = () => {
  return (
    <>
      <div className="app-screenshots-wrap-area">
        <h2 className="purpleBannerHeading">Engage, Convert, Succeed!</h2>
        <span className="">
          MarketWiseAI stands out from the competition with its unparalleled
          combination of advanced AI technology, powerful integrations, and
          comprehensive features
        </span>
      </div>
    </>
  );
};

export default AppScreenshots;
