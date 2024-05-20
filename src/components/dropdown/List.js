import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 w-full bg-white rounded-lg shadow-sm top-full max-h-[300px] overflow-y-auto z-20">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
