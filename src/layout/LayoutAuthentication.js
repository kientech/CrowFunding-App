import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-liteBackground dark:bg-darkBg relative isolate">
      <img
        src="/images/ellipse.png"
        alt="background"
        className="pointer-events-none absolute left-0 right-0 bottom-0 z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet="/images/logo.png 2x" alt="" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-7 mx-auto lg:px-16 lg:py-12 ">
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
