import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

const DashboardSearch = () => {
  const [searchResult, setSearchResult] = useState(false);
  return (
    <div className="relative">
      <div className="w-full bg-white rounded-full shadow-sm p-2 flex items-center z-50">
        <div className="flex-1 pr-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparent txt-sm placeholder:text-tex4 text-text1 border-none w-full outline-none"
          />
        </div>
        <button className="w-[72px] h-10 flex items-center justify-center rounded-full bg-primary text-white">
          <UilSearch className="text-center"></UilSearch>
        </button>
      </div>
      {searchResult && (
        <div className="absolute w-full max-w-[843px] lg:w-[843px] bg-white shadow-sm top-full left-0 z-50 translate-y-5 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <p className="text-text1 font-normal text-sm">
              See all 10,124 fundraisier
            </p>
            <span className="px-4 py-2 rounded-xl transition-all bg-red-100 hover:bg-red-200 cursor-pointer">
              <UilMultiply
                size="20"
                className={`text-errorColor text-sm `}
              ></UilMultiply>
            </span>
          </div>
          <div className="mb-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center mb-5">
                <img
                  src="https://cdn.dribbble.com/userupload/2798814/file/original-3cfdbabadfd8f92aed97b0c0b57c6b89.png?resize=1504x1128"
                  className="w-[50px] h-[50px] object-cover rounded-lg mr-[20px]"
                  alt=""
                />
                <div className="font-normal ">
                  <h4 className="text-text1 font-sm mb-1">
                    <strong>Education</strong> fund for Durgham Family
                  </h4>
                  <span className="text-text3">By Durgham Family</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-text1 font-semibold text-md mb-4">
              Related searches
            </h4>
            <div className="flex flex-col gap-y-2">
              <span>education fund</span>
              <span>education fund</span>
              <span>education fund</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSearch;
