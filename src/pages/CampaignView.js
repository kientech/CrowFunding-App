import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { UilFolder } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import CampaignTabContent from "../modules/campaign/CampaignTabContent";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl w-full bg-cover bg-no-repeat bg-center flex justify-center items-center text-white text-3xl font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(179deg, rgba(32, 18, 63, 0) -7.14%, rgba(0, 0, 0, 0.4) 87.01%), url('https://cdn.dribbble.com/userupload/5812127/file/original-2958dd7c21f60d7255649f6229db6f72.jpg?resize=1504x1128)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="w-full max-w-[1066px] h-[398px] flex mb-28">
        <div className="w-[583px] h-full rounded-xl">
          <img
            src="https://cdn.dribbble.com/users/3320958/screenshots/15689200/media/5ab17ab3fc29d5ac7f1ab2316d50826b.jpeg?resize=1600x1200&vertical=center"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="ml-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between">
              <Link
                to={"/education"}
                className="flex flex-row items-center gap-x-2"
              >
                <UilFolder className={"text-text3 block"}></UilFolder>
                <p className="text-text3 text-sm font-normal block ">
                  Education
                </p>
              </Link>
            </div>
            <div className="flex gap-x-4">
              <Link
                to={"https://www.facebook.com/"}
                className="p-2 bg-white shadow-sm rounded-full"
              >
                <UilFacebookF className={`text-text3`} size="20"></UilFacebookF>
              </Link>
              <Link
                to={"https://www.facebook.com/"}
                className="p-2 bg-white shadow-sm rounded-full"
              >
                <UilFacebookF className={`text-text3`} size="20"></UilFacebookF>
              </Link>
              <Link
                to={"https://www.facebook.com/"}
                className="p-2 bg-white shadow-sm rounded-full"
              >
                <UilFacebookF className={`text-text3`} size="20"></UilFacebookF>
              </Link>
            </div>
          </div>
          <h2
            className="text-xl text-text1 font-semibold mb-4"
            style={{ lineHeight: "26px" }}
          >
            Powered Kits Learning Boxes
          </h2>
          <p className="text-text3 text-sm font-normal mb-5">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </p>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full mr-5">
              <img
                src="https://cdn.dribbble.com/userupload/5812127/file/original-2958dd7c21f60d7255649f6229db6f72.jpg?resize=1504x1128"
                alt=""
                className="inline-block w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="">
              <div className="flex flex-row gap-x-1 items-center">
                <h3 className="text-lg font-semibold mb-1">Kien Duong Trung</h3>
                <div>Web Developer</div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <span className="text-primary font-semibold">02 Campaign</span>
                <span className="w-2 h-2 bg-text3 rounded-full"></span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="w-full h-2 rounded-full bg-bgBar mb-5">
            <div className="w-[80%] h-2 rounded-full bg-primary"></div>
          </div>

          <div className="flex justify-between items-center mb-5 flex-1">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-text1">$2000</span>
              <span className="text-md text-text4 mt-[3px]">
                Raised of $1,900
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-text1">$50</span>
              <span className="text-md text-text4 mt-[3px]">Total backers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-text1">$50</span>
              <span className="text-md text-text4 mt-[3px]">Total backers</span>
            </div>
          </div>
          <Button className={`mt-1 inline-block`}>Back this project</Button>
        </div>
      </div>

      <div>
        <CampaignTabContent></CampaignTabContent>
      </div>
    </Fragment>
  );
};

export default CampaignView;
