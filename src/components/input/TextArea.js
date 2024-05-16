import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({
  placeholder = "",
  control,
  name,
  className = "",
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      className={`py-4 px-6 w-full outline-none rounded-xl border text-text1 placeholder:text-text4 placeholder:text-sm dark:border-darkStrock dark:text-white dark:bg-darkSecondary transition-all min-h-[140px] ${className}`}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default TextArea;
