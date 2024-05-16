import { useState } from "react";

const useToggleValue = (initializeValue = false) => {
  const [value, setValue] = useState(initializeValue);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return { value, handleToggleValue };
};

export default useToggleValue;
