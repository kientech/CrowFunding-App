import React from "react";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import Overlay from "../components/common/Overlay";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import { UilTimes } from "@iconscout/react-unicons";
import { Button } from "../components/button";
import { Input } from "../components/input";
import FormField from "../components/common/FormField";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import CampaignTabItem from "../modules/campaign/CampaignTabItem";

const LayoutDashboard = () => {
  const { handleSubmitting, control } = useForm();
  return (
    <div className="p-10 bg-liteBackground min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center outline-none"
        className="modal-content w-full max-w-[521px] bg-pureWhite rounded-xl p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden outline-none"
      >
        <button className="absolute z-10 right-5 top-5 text-text1">
          <UilTimes></UilTimes>
        </button>
        <h2 className="font-bold text-lg mb-10 text-center">
          Back this project
        </h2>
        <div className="p-5 bg-pureWhite rounded-lg shadow-sm mb-5">
          <FormField>
            <Label htmlFor="plege">Enter the contribute amount</Label>
            <Input placeholder="$10" control={control} name="pledge"></Input>
          </FormField>
          <span className="inline-block  text-sm text-text3 font-normal mb-5">
            Contribution are not associatied with perks
          </span>
          <Button className={`inline-block text-pureWhite w-[162px]`}>
            Continue
          </Button>
        </div>
        <CampaignTabItem></CampaignTabItem>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>

      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
