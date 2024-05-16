import React from "react";

const CampaignTabItem = ({showButton = false}) => {
  return (
    <div className="w-full rounded-lg bg-pureWhite shadow-sm">
      <div className="w-full h-[232px]">
        <img
          src="https://cdn.dribbble.com/userupload/4570909/file/original-bf64999eeea025a82fbae68a739358de.jpg?resize=2048x1536"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="p-5">
        <span className="bg-secondary text-pureWhite py-1 px-4 rounded-md inline-block mb-5">
          Feature
        </span>
        <h2 className="text-lg font-bold text-text1 mb-1">
          Special One Camera
        </h2>
        <div className="flex items-center justify-start gap-x-2 mb-4">
          <h3 className="text-md font-bold text-text1 mb-1">$2,724 USD</h3>
          <p className="text-errorColor text-md font-normal line-through">
            $1,504 USD
          </p>
          <p className="text-errorColor text-md font-normal">(12% OFF)</p>
        </div>
        <h4 className="text-md font-semibold">Estimated Shipping</h4>
        <span className="mb-4 text-sm text-text4 inline-block">
          October 2022
        </span>
        <p className="mb-4 text-sm text-text4">05 claimed</p>
        <p className="text-sm text-text4">Ships worldwide</p>
      </div>
    </div>
  );
};

export default CampaignTabItem;
