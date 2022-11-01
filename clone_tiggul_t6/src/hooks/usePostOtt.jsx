import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyOtt } from "../redux/modules/addPartySlice";

const usePostOtt = () => {
  const dispatch = useDispatch();
  const [height, setheight] = useState(false);

  const getOtt = useSelector((state) => state.data.data);

  const ChooseOttHandler = (my) => {
    setheight(!height);
    dispatch(__getMyOtt(my));
    const PickOtt = { data: getOtt };
    window.sessionStorage.setItem("getOtt", JSON.stringify(PickOtt));
  };

  return [height, ChooseOttHandler];
};

export default usePostOtt;
