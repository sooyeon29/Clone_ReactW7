import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, setToggle, clickedToggle];
};

export default useToggle;
