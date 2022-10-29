import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postMyOtt } from "../redux/modules/addPartySlice";

const usePostOtt = () => {
  const dispatch = useDispatch();

  const [ott, setOtt] = useState({
    ottService: "",
    price: 0,
    hostCommision: 0,
    memberCommision: 0,
    isClick: false,
  });

  const ChooseOttHandler = (myott) => {
    console.log("핸들러에서 왔니?", myott);
    const click = { ...myott, isClick: !false };
    setOtt({ ...ott, ...click });
    dispatch(__postMyOtt({ ...ott, ...click }));
    // const ChooseOtt = { ottService: myott };
    // window.sessionStorage.setItem("myott", JSON.stringify(ChooseOtt));
  };

  return [ChooseOttHandler];
};

export default usePostOtt;
