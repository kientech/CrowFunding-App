import React from "react";
import LayoutDashboard from "../layout/LayoutDashboard";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import Heading from "../components/common/Heading";
import CompaignFeature from "../modules/campaign/CompaignFeature";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 mb-20 bg-pureWhite shadow-sm rounded-lg">
        <div className="flex">
          <Link
            to={"/campaign/add-campaign"}
            className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#A992FE] text-pureWhite text-4xl mr-6"
          >
            +
          </Link>
          <div>
            <Link
              to={"/campaign/add-campaign"}
              className="text-lg font-semibold mb-2 text-text1"
            >
              Create Your Campaign
            </Link>
            <p className="text-text3 font-normal text-sm mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link
              to={"/help-center"}
              className="text-primary font-normal text-sm hover:underline"
            >
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <div>
          <Button
            href="/campaign/create-campaign"
            className={"text-secondary bg-[#EEEAFD] w-[200px]"}
          >
            Create campaign
          </Button>
        </div>
      </div>

      <div>
        <Heading>Your Campaign</Heading>
        <div className="flex flex-col">
          {[1, 2, 3, 4].map((item) => (
            <CompaignFeature key={item}></CompaignFeature>
          ))}
          <Button
            className={"text-secondary mx-auto cursor-pointer bg-[#EEEAFD] w-[200px]"}
          >
            See more +
          </Button>
        </div>
      </div>
    </>
  );
};

export default CampaignPage;
