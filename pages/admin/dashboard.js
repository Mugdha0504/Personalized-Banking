import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
   
      <div className="flex flex-wrap">
         {/* Header */}
         <div className="relative bg-blueGray-800 md:pt-6 pt-6"> <HeaderStats /></div>
       
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 pt-6">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4 pt-6">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
