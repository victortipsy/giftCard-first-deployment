import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { singleGiftCard } from "../../../API/Endpoint";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const DetailCard = () => {
  const { id } = useParams();

  const fetchData = useQuery({
    queryKey: ["post", id],
    queryFn: () => singleGiftCard(id),
  });

  console.log(fetchData);

  return (
    <Container>
      <div style={{ marginTop: "40px" }}>
        <Name>Wayne Enterprise Gift Card Trade</Name>
        <Inputs>
          This gift card is made for Wayne Enterprise products only
        </Inputs>
        <Valuation>
          <div
            style={{
              fontSize: "13px",
              color: "#9e9d9df8",
              fontWeight: 600,
            }}
          >
            Cash Value
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "40px",
              fontWeight: 600,
              color: "#1f34ee7d",
            }}
          >
            $1000
          </div>
        </Valuation>
        <Inputs2>Purchase this card</Inputs2>
      </div>
    </Container>
  );
};

export default DetailCard;

const Container = styled.div`
  width: 70%;
  padding-left: 40px;
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const Inputs = styled.div`
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;
const Inputs2 = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: blueviolet;
  color: whitesmoke;
  font-weight: 600;
`;
const Valuation = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
