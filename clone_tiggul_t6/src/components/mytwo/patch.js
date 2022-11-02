import styled from "styled-components";
import useToggle from "../../hooks/useToggle";

const Patch = () => {
  const [toggle, setToggle, clickedToggle] = useToggle();

  return (
    <div>
      {!toggle ? (
        <TotalPriceBox>
          <Inbox>
            <Id>
              ID
              <p />
            </Id>
          </Inbox>

          <Inbox>
            <Id>
              PW
              <p />
            </Id>
          </Inbox>
        </TotalPriceBox>
      ) : (
        <TotalPriceBox>
          <Inbox>
            <Id>
              ID
              <input placeholder="아이디 입력" />
            </Id>
          </Inbox>

          <Inbox>
            <Id>
              PW
              <input type="password" placeholder="패스워드 입력" />
            </Id>
          </Inbox>
        </TotalPriceBox>
      )}
      <button onClick={clickedToggle} setToggle={setToggle}>
        ID/PW 변경하기
      </button>
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
