import React from "react";
import { Link } from "react-router-dom";
import { UilFolder } from "@iconscout/react-unicons";

const CompaignFeature = () => {
  return (
    <div className="w-full max-w-[1148px] h-[266px] flex items-center mb-10">
      <div className="w-full max-w-[583px] h-full rounded-xl">
        <img
          src="https://cdn.dribbble.com/users/3320958/screenshots/15689200/media/5ab17ab3fc29d5ac7f1ab2316d50826b.jpeg?resize=1600x1200&vertical=center"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="ml-6 p-4">
        <Link
          to={"/education"}
          className="flex flex-row items-center gap-x-2 mb-4"
        >
          <UilFolder className={"text-text3 block"}></UilFolder>
          <p className="text-text3 text-sm font-normal block ">Education</p>
        </Link>
        <h2
          className="text-xl text-text1 font-semibold mb-4"
          style={{ lineHeight: "26px" }}
        >
          Powered Kits Learning Boxes
        </h2>
        <p className="text-text3 text-sm font-normal mb-5">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </p>
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
      </div>
    </div>
  );
};

export default CompaignFeature;
