import styled from "styled-components";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteOttPw, __putOttPw } from "../../redux/modules/leaderSlice";

const Patch = () => {
  const [toggle, setToggle] = useState(false);
  const [modifyId, setModifyId] = useState("");
  const [modifyPw, setModifyPw] = useState("");
  const [modify, setModify] = useState({
    ID: "",
    password: "",
  });
  // const idRef = useRef();
  // const pwRef = useRef();

  const dispatch = useDispatch;
  const getottpw = useSelector((state) => state.leader.data);

  // const clickedToggle = () => {
  //   setToggle((prev) => !prev);
  // };
  // const fixUsersHandler = (e) => {
  //   const { ID, password } = e.target;
  //   setNewInfo({ ...modify, [ID]: value });
  // };

  // const saveChanges = (e) => {
  //   e.preventDefault();
  //   if (modify.ID.trim() === "" || modify.password.trim() === "") return;
  //   setToggle((prev) => !prev);
  //   MyPageApi.putUsers(modify)

  // };

  return (
    <div>
      {!toggle ? (
        <TotalPriceBox>
          <Inbox>
            <Id>
              ID
              <p>{getottpw?.ID}</p>
            </Id>
          </Inbox>

          <Inbox>
            <Id>
              PW
              <p>{getottpw?.password}</p>
            </Id>
          </Inbox>
        </TotalPriceBox>
      ) : (
        <TotalPriceBox>
          <Inbox>
            <Id>
              ID
              <input
                onChange={(e) => {
                  setModifyId(e.target.value);
                }}
                defaultValue={getottpw?.ID}
              />
            </Id>
          </Inbox>

          <Inbox>
            <Id>
              PW
              <input
                maxLength="10"
                onChange={(e) => {
                  setModifyPw(e.target.value);
                }}
                defaultValue={getottpw?.password}
              />
            </Id>
          </Inbox>
        </TotalPriceBox>
      )}
      <button
        onClick={() => {
          if (!toggle) {
            setToggle(!toggle);
          } else {
            dispatch(
              __putOttPw({
                ...getottpw,
                Id: modifyId,
                password: modifyPw,
              })
            );
            setToggle(!toggle);
          }
        }}
      >
        ID/PW 변경하기
      </button>
      {/* <button onClick={() => dispatch(__deleteOttPw(getottpw.partyId))}>
        삭제하기
      </button> */}
    </div>
  );
};
export default Patch;

const TotalPriceBox = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  color: var(--gray-600);
  font-size: 14px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      color: var(--gray-300);
      text-decoration: line-through;
      font-size: 14px;
    }
  }
`;
const Inbox = styled.div`
  padding: 10px 16px;
  height: 48px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--white);
  margin-top: 6px;
`;

const Id = styled.div`
  display: flex;

  > input {
    width: 100%;
    border: 0px;
    outline: 0px;
    caret-color: var(--primary-500);
    font-family: SpoqaHanSansNeo;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    font-weight: normal;
    color: var(--gray-600);
  }
`;
