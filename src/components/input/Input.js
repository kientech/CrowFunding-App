import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder = "",
    error = "",
    children,
    ...rest
  } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        className={`py-4 px-6 w-full outline-none rounded-xl border text-text1 placeholder:text-text4 placeholder:text-sm dark:border-darkStrock dark:text-white dark:bg-darkSecondary transition-all ${
          error.length > 0 ? "border-errorColor" : "border-strockColor"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-errorColor mt-1 text-sm absolute top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
