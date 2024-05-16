import React from "react";
import LayoutDashboard from "../layout/LayoutDashboard";
import Heading from "../components/common/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import CompaignFeature from "../modules/campaign/CompaignFeature";

const DashboardPage = ({ children }) => {
  return (
    <>
      <Heading>Your Campaign</Heading>
      <CompaignFeature></CompaignFeature>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <CampaignItem key={item}></CampaignItem>
        ))}
      </CampaignGrid>
    </>
  );
};

export default DashboardPage;
