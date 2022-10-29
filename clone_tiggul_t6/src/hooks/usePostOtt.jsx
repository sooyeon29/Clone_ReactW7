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
    // 각 ott를 선택하는 경우 선택한 ott의 정보가 세션 스토리지에 값이 저장된다
    const ChooseOtt = { ottService: myott };
    sessionStorage.setItem("myott", JSON.stringify(ChooseOtt));
    // sessionStorage.setItem("myott", ChooseOtt);
  };

  return [ChooseOttHandler];
};

export default usePostOtt;
