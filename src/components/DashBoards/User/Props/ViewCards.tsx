import React from "react";
import styled from "styled-components";
import pic from "../../.././Images/trancard.svg";
import Card from "../Props/Cards";
import { FaWallet } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { allGiftCard } from "../../../API/Endpoint";
import { useQuery } from "@tanstack/react-query";

const ViewCards = () => {
  const dummy = [{ card: "One" }, { card: "Two" }];

  const AllgiftCards = useQuery({
    queryKey: ["Allgiftcards"],
    queryFn: allGiftCard,
  });

  console.log(AllgiftCards);

  return (
    <div>
      {AllgiftCards?.data?.data.length < 0 ? (
        <Nothing>
          <CenterHold>
            <Pic>
              <img src={pic} />
            </Pic>
            <Txt>No Withdrawals Yet!</Txt>
            <Sxt>
              This place is empty because you haven't made any withdrawal 😒
            </Sxt>
          </CenterHold>
        </Nothing>
      ) : (
        <div>
          <CardContainer>
            {AllgiftCards?.data?.data?.data?.map((props: any) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/user-dashboard/card/${props?._id}`}
              >
                <Card
                  pic={props?.BrandLogo}
                  busyname={props?.name}
                  amount={props?.moneyWorth}
                  colour={props?.colour}
                  code={props?.uniqueID}
                />
              </Link>
            ))}
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default ViewCards;

const Container = styled.div`
  /* overflow: scroll; */
`;
const CardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const Nothing = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterHold = styled.div`
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pic = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
  }
`;
const Txt = styled.div`
  font-size: 16px;
  color: gray;
  font-weight: bold;
`;
const Sxt = styled.div`
  font-size: 14px;
  max-width: 250px;
  color: #9c9c9c;
`;
