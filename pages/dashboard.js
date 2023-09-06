import React from "react";

import Sidebar from "@/components/Dashboard/components/SideBar/Sidebar";

import Dashboard from "@/components/UserDashboard/Dashboard";

import routes from "@/components/Dashboard/components/routes";

const dashboard = () => {
  return (
    <div>
      {/* <Sidebar bgColor="black" activeColor="info" routes={routes} /> */}
      <Dashboard />
    </div>
  );
};

export default dashboard;
