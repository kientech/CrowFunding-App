import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`text-lg font-semibold text-text1 mb-5 ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
