import React from "react";
import { UilCheck } from "@iconscout/react-unicons";

const Checkbox = ({
  checked = false,
  name = "",
  children,
  onClick = () => {},
}) => {
  return (
    <div className="flex flex-row gap-x-5">
      <div
        className={`inline-block text-white w-5 h-5 rounded border  ${
          checked ? "bg-primary" : "border-strockColor"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
        />
        <UilCheck className="w-5 h-5 dark:text-darkSecondary"></UilCheck>
      </div>
      <label
        className="font-normal text-sm  flex-1 text-text2"
        onClick={onClick}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
