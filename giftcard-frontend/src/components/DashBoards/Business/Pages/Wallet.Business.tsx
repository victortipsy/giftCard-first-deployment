import React, { useState } from "react";
import styled from "styled-components";
// import ProfileComp from "../Home/ProfileComp";
import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useAppSelector } from "../../../Global/Store";
import axios from "axios";

const BusinessWallet = () => {
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);
  const ShowPop = () => {
    setPopup(true);
  };
  const HidePop = () => {
    setPopup(false);
  };
  const URl = "https://giftcard-api.onrender.com";
  const business = useAppSelector((state) => state.bizClient);
  console.log("client", business);
  const postPay = async () => {
    await axios
      .post(`${URl}/api/withdraw-money/${business?._id}`)
      .then((res) => {
        console.log("pay", res.data);
      })
      .catch((err) => {
        console.log(`this is err from axios ${err}`);
      });
  };
  return (
    <>
      <div>
        {popup ? (
          <Popup>
            <Card>
              <MdOutlineCancel
                onClick={HidePop}
                style={{
                  color: "silver",
                  fontSize: "40px",
                  position: "absolute",
                  right: "-29px",
                  top: "-29px",
                  cursor: "pointer",
                  zIndex: "2",
                }}
              />
              <h2>Process Withdrawal</h2>
              <p>Withdraw funds from wallet</p>

              <AmountHold>${business?.Balance}</AmountHold>
              <input type="text" placeholder="Enter amount to withdraw" />
              <button>Process Payment</button>
            </Card>
          </Popup>
        ) : null}
      </div>
      <Container>
        <Head>
          <InHead>
            <Message>Wallet</Message>
            <SeeBalance>
              <BalanceDetails>
                <Viewer>
                  <div style={{ marginBottom: "5px" }}>Available balance</div>
                  <div
                    onClick={() => {
                      setShow(!show);
                    }}>
                    {show ? (
                      <AiFillEye
                        style={{ marginTop: "5px", fontSize: "30px" }}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        style={{ marginTop: "5px", fontSize: "30px" }}
                      />
                    )}
                  </div>
                </Viewer>
                {show ? (
                  <Info>${business?.Balance}</Info>
                ) : (
                  <Info>*******</Info>
                )}
              </BalanceDetails>
              <WithdrawButton onClick={postPay}>Withdraw</WithdrawButton>
            </SeeBalance>
          </InHead>
        </Head>
        <Body>
          <InBody>
            <Defaults>
              <div style={{ fontSize: "25px", fontWeight: "500" }}>
                Default Bank Account
              </div>
              <OtherDefault>
                <div style={{ fontSize: "25px", fontWeight: "500" }}>
                  Other Bank Accounts
                </div>
                <AddNew onClick={ShowPop}>
                  <div style={{ fontSize: "40px" }}>+</div>
                  <div>Add New bank account</div>
                </AddNew>
              </OtherDefault>
            </Defaults>
            <History>
              <p>Withdrawal History</p>
              <HistoryHold>
                <Up>
                  <Inn>
                    <p>S/N</p>
                    <p>Logo</p>
                    <p>Company Name</p>
                    <p>Date and Time</p>
                    <p>Amount</p>
                  </Inn>
                </Up>
                <All>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 2345)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                  <Two>
                    <p>1</p>
                    <Circle bc={`#${Math.floor(Math.random() * 1000 + 1543)}`}>
                      <p style={{ color: "white", fontSize: "18px" }}>I</p>
                    </Circle>
                    <p>Issac Enterprises</p>
                    <p>13-03-23/10:00am</p>
                    <p>{(3000.0).toLocaleString()}</p>
                  </Two>
                </All>
              </HistoryHold>
            </History>
          </InBody>
        </Body>
      </Container>
    </>
  );
};

export default BusinessWallet;

const Inn = styled.div`
  width: 91%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Two = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div<{ bc: string }>`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 33px;
    height: 33px;
  }
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bc }) => bc};
`;

const All = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  /* background-color: red; */
  /* margin-left: 30px; */
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(17, 12, 12, 0.06) 0px 2px 4px -1px;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const Up = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
  position: sticky;
  top: 0.1px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: white;
`;

const HistoryHold = styled.div`
  width: 100%;
  background-color: white;
  /* padding: 25px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
`;

const History = styled.div`
  width: 100%;
  /* background-color: #f9f4ff; */
  border-radius: 10px;
  margin-top: 15px;
  padding-top: 13px;
  margin-bottom: 25px;

  p {
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: 800px) {
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

const Head = styled.div`
  width: 100%;
  max-height: 240px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InHead = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const Message = styled.div`
  font-size: 25px;
  span {
    font-weight: 600;
  }
`;
const SeeBalance = styled.div`
  color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Viewer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 17px;
`;
const Info = styled.div`
  font-size: 20px;
`;
const BalanceDetails = styled.div``;
const WithdrawButton = styled.button`
  border-radius: 10px;
  width: 250px;
  color: white;
  background-color: #a35ef7;
  padding: 15px 60px;
  border: none;
  outline: none;
  font-size: 17px;
  margin-top: 30px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #913cf9;
  }
`;
const Body = styled.div`
  width: 100%;
  color: #3d3d3d;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const Defaults = styled.div``;
const OtherDefault = styled.div`
  margin-top: 60px;
`;
const AddNew = styled.div`
  cursor: pointer;
  padding: 40px;
  color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid blue;
  margin-top: 10px;
  @media screen and (min-width: 800px) {
    width: 400px;
  }
`;

const AmountHold = styled.div`
  width: 97%;
  height: 48px;
  border-radius: 10px;
  background-color: #f9f4ff;
  margin-bottom: 20px;
  display: flex;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
`;

const Card = styled.div`
  width: 310px;
  padding: 30px;
  height: 350px;
  background-color: white;
  position: relative;
  border-radius: 15px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  input {
    width: 97%;
    height: 48px;
    border-radius: 10px;
    background-color: #f9f4ff;
    border: 0;
    outline: 0;
    padding-left: 10px;

    ::placeholder {
      color: silver;
    }
  }

  button {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 10px;
    color: white;
    background-color: blueviolet;
    margin-top: 80px;
  }
`;

const Popup = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const AddBox = styled.div`
  width: 280px;
  height: 130px;
  border: 1px solid blue;
  margin-left: 270px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 17px;
    color: blue;
  }
`;
