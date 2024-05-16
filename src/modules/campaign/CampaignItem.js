import React from "react";
import { UilFolder } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div className="bg-pureWhite shadow-sm rounded-xl">
      <div className="w-ful max-w-[288px] h-[158px]">
        <img
          src="https://cdn.dribbble.com/users/3320958/screenshots/15689200/media/5ab17ab3fc29d5ac7f1ab2316d50826b.jpeg?resize=1600x1200&vertical=center"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
      <div className="px-5 py-4">
        <Link
          to={"/education"}
          className="flex flex-row items-center gap-x-2 mb-4"
        >
          <UilFolder className={"text-text3 block"}></UilFolder>
          <p className="text-text3 text-sm font-normal block ">Education</p>
        </Link>
        <h2
          className="text-md text-text1 font-semibold mb-1"
          style={{ lineHeight: "26px" }}
        >
          Powered Kits Learning Boxes
        </h2>
        <span className="text-sm font-normal text-text3 inline-block mb-4">
          Fun, durable and reusable boxes with eco-friendly options.
        </span>

        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text1">$2000</span>
            <span className="text-sm text-text4 mt-[3px]">
              Raised of $1,900
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text1">$50</span>
            <span className="text-sm text-text4 mt-[3px]">Total backers</span>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <img
            src="https://cdn.dribbble.com/userupload/3248441/file/still-9954a21aaa0fed468d9cb168bcf191e9.png?resize=640x480&vertical=center"
            className="w-[30px] h-[30px] rounded-full object-cover"
            alt=""
          />
          <p className="text-text3 text-sm font-normal">
            by
            <span className="font-semibold text-text1"> Kien Duong Trung</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
