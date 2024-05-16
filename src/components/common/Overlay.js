import React from "react";

const Overlay = () => {
  return (
    <div className="fixed inset-0 z-40 bg-black overlay bg-opacity-10 opacity-0 invisible pointer-events-none"></div>
  );
};

export default Overlay;
