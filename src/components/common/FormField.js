import React from "react";

const FormField = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-y-3 mb-4 ${className}`}>{children}</div>
  );
};

export default FormField;
