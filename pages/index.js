import React from "react";
import NavbarStyleOne from "@/components/LandingPage/NavbarStyleOne";
import MainBanner from "@/components/LandingPage/MainBanner";
import Features from "@/components/LandingPage/Features";
import BestAppEver from "@/components/LandingPage/BestAppEver";
import WISECardModel from "@/components/LandingPage/WISECardModel";
import AppScreenshotsStyle6 from "@/components/LandingPage/AppScreenshotsStyle6";
import AppProgress from "@/components/LandingPage/AppProgress";
import IntroVideo from "@/components/LandingPage/IntroVideo";
import AppScreenshots from "@/components/LandingPage/AppScreenshots";
import KeyFeatures from "@/components/LandingPage/KeyFeatures";
import ClientReviews from "@/components/LandingPage/ClientReviews";
import PricingPlanStyle1 from "@/components/LandingPage/PricingPlanStyle1";
import BlogPost from "@/components/LandingPage/BlogPost";
import Newsletter from "@/components/LandingPage/Newsletter";
import FooterStyleFive from "@/components/LandingPage/FooterStyleFive";

const IndexPage = () => {
  return (
    <>
      <NavbarStyleOne />

      <MainBanner />

      <Features />

      <BestAppEver />

      <WISECardModel />

      <AppScreenshotsStyle6 />

      <AppProgress />

      <IntroVideo />

      <AppScreenshots />

      <KeyFeatures />

      <ClientReviews />

      {/* <PricingPlanStyle1 /> */}

      <BlogPost />

      <Newsletter />

      <FooterStyleFive />
    </>
  );
};

export default IndexPage;
