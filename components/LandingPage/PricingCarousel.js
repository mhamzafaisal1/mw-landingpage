import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { loadStripe } from "@stripe/stripe-js";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const options = {
  nav: true,
  loop: false,
  margin: 5,
  dots: false,
  center: false,
  autoplay: false,
  autoplayHoverPause: true,
  startPosition: 0,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

const PricingCarousel = () => {
  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     console.log("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     console.log(
  //       "Order canceled -- continue to shop around and checkout when you’re ready."
  //     );
  //   }
  // }, []);

  return (
    <div className="pricingCarouselContainer">
      <OwlCarousel
        className="feedback-slides owl-carousel owl-theme"
        {...options}
      >
        {/* Card 1 start */}
        <div className="col-lg-6 col-md-6 col-sm-6 pricingCarouselCardContainerWidth">
          <div className="single-pricing-table">
            <div className="title">
              <h3>Starter</h3>
              <p>Powerful & awesome elements</p>
            </div>
            <div className="price">
              $20 <span>/Month</span>
            </div>

            <form action="/api/checkout" method="POST">
              <button className="default-btn" type="submit">
                Purchase Plan
              </button>
            </form>

            <ul className="features-list">
              <li>
                <i className="ri-check-line"></i> Up to 100 Website
              </li>
              <li>
                <i className="ri-check-line"></i> Lifetime free Support
              </li>
              <li>
                <i className="ri-check-line"></i> 100 GB Dedicated Hosting free
              </li>
              <li>
                <i className="ri-check-line"></i> 24/7 Live Support
              </li>
              <li>
                <i className="ri-check-line"></i> SEO Optimized
              </li>
            </ul>
          </div>
        </div>

        {/* Card 1 end */}

        {/* Card 2 start */}
        <div className="col-lg-6 col-md-6 col-sm-6 pricingCarouselCardContainerWidth">
          <div className="single-pricing-table">
            <div className="title">
              <h3>Pro</h3>
              <p>Powerful & awesome elements</p>
            </div>
            <div className="price">
              $30 <span>/Month</span>
            </div>

            <Link href="/sign-in">
              <a className="default-btn">Purchase Plan</a>
            </Link>

            <ul className="features-list">
              <li>
                <i className="ri-check-line"></i> Up to 100 Website
              </li>
              <li>
                <i className="ri-check-line"></i> Lifetime free Support
              </li>
              <li>
                <i className="ri-check-line"></i> 100 GB Dedicated Hosting free
              </li>
              <li>
                <i className="ri-check-line"></i> 24/7 Live Support
              </li>
              <li>
                <i className="ri-check-line"></i> SEO Optimized
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2 end */}

        {/* Card 2 start */}
        <div className="col-lg-6 col-md-6 col-sm-6 pricingCarouselCardContainerWidth">
          <div className="single-pricing-table">
            <div className="title">
              <h3>Elite</h3>
              <p>Powerful & awesome elements</p>
            </div>
            <div className="price">
              $40 <span>/Month</span>
            </div>

            <Link href="/sign-in">
              <a className="default-btn">Purchase Plan</a>
            </Link>

            <ul className="features-list">
              <li>
                <i className="ri-check-line"></i> Up to 100 Website
              </li>
              <li>
                <i className="ri-check-line"></i> Lifetime free Support
              </li>
              <li>
                <i className="ri-check-line"></i> 100 GB Dedicated Hosting free
              </li>
              <li>
                <i className="ri-check-line"></i> 24/7 Live Support
              </li>
              <li>
                <i className="ri-check-line"></i> SEO Optimized
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2 end */}

        {/* Card 2 start */}
        <div className="col-lg-6 col-md-6 col-sm-6 pricingCarouselCardContainerWidth">
          <div className="single-pricing-table">
            <div className="title">
              <h3>Ultimate</h3>
              <p>Powerful & awesome elements</p>
            </div>
            <div className="price">
              $5 <span>/Month</span>
            </div>

            <Link href="/sign-in">
              <a className="default-btn">Purchase Plan</a>
            </Link>

            <ul className="features-list">
              <li>
                <i className="ri-check-line"></i> Up to 100 Website
              </li>
              <li>
                <i className="ri-check-line"></i> Lifetime free Support
              </li>
              <li>
                <i className="ri-check-line"></i> 100 GB Dedicated Hosting free
              </li>
              <li>
                <i className="ri-check-line"></i> 24/7 Live Support
              </li>
              <li>
                <i className="ri-check-line"></i> SEO Optimized
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2 end */}
      </OwlCarousel>
    </div>
  );
};

export default PricingCarousel;
