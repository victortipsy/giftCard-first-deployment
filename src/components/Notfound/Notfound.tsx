import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import notfound from "../../Assets/404.png";

const Notfound = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Wrap>
        <Image>
          <img src={notfound} />
        </Image>
        <Button>
          <Oopsy>Oops. Looks like you're lost</Oopsy>
          <button onClick={back}>Go Back</button>
        </Button>
      </Wrap>
    </Container>
  );
};

export default Notfound;

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 800px) {
    width: 50%;
    height: 600px;
  }
  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 300px;
  @media screen and (min-width: 800px) {
    width: 45%;
    height: 600px;
  }
  button {
    padding: 15px 50px;
    border: none;
    outline: none;
    border-radius: 7px;
    color: white;
    background-color: blueviolet;
    font-weight: bold;
    font-size: 15px;
  }
`;
const Oopsy = styled.div`
  font-size: 30px;
  text-align: center;
  color: #511985;
`;
