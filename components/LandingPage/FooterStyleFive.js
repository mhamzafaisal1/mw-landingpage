// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterStyleFive = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap-area with-gradient-color pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget footerLogoColumn">
                <Link href="/">
                  <a className="logo">
                    <Image
                      src="/images/MarketwiseAI-Logo-SQUARE Mod.png"
                      alt="logo"
                      width={200}
                      height={180}
                    />
                  </a>
                </Link>

                <p>
                  Innovative platform that combines advanced analytics, smart
                  optimization, and efficient management to help advertisers
                  achieve remarkable results.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.messenger.com/" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <i className="ri-github-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-2">
                <h3>Company</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/about-simple">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features">
                      <a>Core Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/feedback">
                      <a>Reviews</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Useful Links</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">
                      <a>How It Works?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Essential Guides for Digital Marketers</h3>
                <p>
                  Increase your brand visibility and customer engagement,
                  leading to higher revenue.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">
                    <i className="ri-send-plane-2-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear}. All Rights Reserved by{" "}
              <strong>MarketWiseAI</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleFive;
