import React from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
resetIdCounter();

import AppProgressStyle1 from "./AppProgressStyle1";

const AppScreenshotsStyle6 = () => {
  return (
    <>
      <div className="screenshots-area">
        <div className="container">
          <div className="screenshots-tabs">
            <Tabs>
              <TabList>
                <Tab>
                  <i className="ri-exchange-dollar-line"></i>
                  Create
                </Tab>
                <Tab>
                  <i className="ri-settings-4-line"></i>
                  Broadcast
                </Tab>
                <Tab>
                  <i className="ri-pie-chart-2-line"></i>
                  Organize
                </Tab>
                <Tab>
                  <i className="ri-briefcase-4-line"></i>
                  Maximize
                </Tab>
              </TabList>

              <TabPanel>
                <AppProgressStyle1
                  heading="Unleash Your Creativity and Make Your Ads Pop!"
                  para1="Say goodbye to complicated design tools and expensive graphic designers. Our platform offers everything you need to create
stunning Facebook, Instagram, and Google ads right at your fingertips."
                  para2="Unlock a world of possibilities with our extensive collection of free themes, emojis, and dynamic backgrounds. No design skills? No
problem! Our intuitive drag-and-drop editor makes it a breeze to create eye-catching ad images in minutes."
                  img=""
                />
              </TabPanel>

              <TabPanel>
                <AppProgressStyle1
                  heading="Supercharge Your Ad Publishing!"
                  para1="Whether you're a seasoned pro or just starting out, our platform streamlines the process of posting ads on top platforms like
Facebook, Instagram, Google, YouTube, and Gmail, all from a single screen. With MarketWiseAi, you can effortlessly send smart and
high-performance ads across multiple channels, right from one centralized platform."
                  para2="Whether you're a small business owner, a marketing professional, or an agency, our platform ensures that your ads are up and
running in no time, delivering impressive results.
"
                  img=""
                />
              </TabPanel>

              <TabPanel>
                <AppProgressStyle1
                  heading="Freedom of Effortless Ad Performance Tracking!"
                  para1="With MarketWiseAi, you can effortlessly monitor the performance of your digital ads. Get comprehensive reports that capture all the
essential metrics you need to measure success. No more overlooking important insights."
                  para2="Stay informed and in control with automatic email reports delivered straight to your inbox. Easily share your reports in PDF format to
collaborate and showcase your achievements."
                  img=""
                />
              </TabPanel>

              <TabPanel>
                <AppProgressStyle1
                  heading="Unleash Your Creativity and Make Your Ads Pop!"
                  para1="Say goodbye to complicated design tools and expensive graphic designers. Our platform offers everything you need to create
stunning Facebook, Instagram, and Google ads right at your fingertips."
                  para2="Unlock a world of possibilities with our extensive collection of free themes, emojis, and dynamic backgrounds. No design skills? No
problem! Our intuitive drag-and-drop editor makes it a breeze to create eye-catching ad images in minutes."
                  img=""
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppScreenshotsStyle6;
