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
  });

  const ChooseOttHandler = (myott) => {
    console.log("핸들러에서 왔니?", myott);
    setOtt({ ...ott, ...myott });
    dispatch(__postMyOtt({ ...ott, ...myott }));
    // const ChooseOtt = { ottService: myott };
    // window.sessionStorage.setItem("myott", JSON.stringify(ChooseOtt));
  };

  //   const ChooseOttHandler = (myott) => {
  //     console.log("핸들러에서 왔니?", myott);
  //     setOtt({ ...ott, ottService: myott });
  //     dispatch(__postMyOtt({ ...ott, ottService: myott }));
  //     const ChooseOtt = { ottService: myott };
  //     window.sessionStorage.setItem("myott", JSON.stringify(ChooseOtt));
  //   };
  return [ChooseOttHandler];
};

export default usePostOtt;
