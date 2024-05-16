import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "../../components/button";

const DashboardTopbar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center flex-1 justify-start gap-x-10">
        <img srcSet="/images/logo.png 2x" alt="" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 whitespace-nowrap">
        <span className="text-text2 font-medium test-base">Fundrising for</span>
        <Button className={"bg-secondary px-7 py-2"}>Start a campaign</Button>
        <img srcSet="/images/logo.png 2x" className="rounded-full" alt="" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
