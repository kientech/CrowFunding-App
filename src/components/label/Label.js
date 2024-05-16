import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorComponent,
});
