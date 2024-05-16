import React from "react";
import { UilEye } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";

const InputEyeToggle = ({ open = false, onClick = () => {} }) => {
  if (open)
    return (
      <UilEye className={`dark:text-strockColor`} onClick={onClick}></UilEye>
    );

  return (
    <UilEyeSlash
      className={`dark:text-strockColor`}
      onClick={onClick}
    ></UilEyeSlash>
  );
};

export default InputEyeToggle;
