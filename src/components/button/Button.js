import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    type = "button",
    children,
    className = "",
    isLoading = false,
    ...rest
  } = props;

  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 mx-auto border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  if (rest.href)
    return (
      <Link
        className={`text-center inline-flex justify-center items-center mx-auto  bg-primary min-h-[56px] text-white font-semibold text-sm p-3 w-full rounded-lg ${
          !!isLoading ? "pointer-events-none opacity-50" : ""
        } ${className}`}
        to={rest.href}
      >
        {child}
      </Link>
    );
  return (
    <button
      className={`bg-primary min-h-[56px] text-white font-semibold text-sm p-3 w-full rounded-lg ${
        !!isLoading ? "pointer-events-none opacity-50" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;
