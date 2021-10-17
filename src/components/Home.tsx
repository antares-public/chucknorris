/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Row } from "antd";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { JokeFromServer } from "../interfaces";
import { apiFetchJoke } from "../api/joke";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const savedJoke: Array<JokeFromServer> | [] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const [joke, setJoke] = useState<JokeFromServer>();
  const [favorite, setFavorite] = useState(savedJoke);
  const [stop, setStop] = useState(false);

  const handleLinks = async () => {
    const res = await apiFetchJoke();
    setJoke(res);
  };

  const handleTime = async (value: boolean) => {
    if (value) {
      setTimeout(() => {
        handleLinks();
      }, 3000);
    }
  };

  const handleLike = async () => {
    setFavorite((prevState: any) => [...prevState, joke]);
  };


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    handleTime(stop);
  }, [stop, handleTime]);

  return (
    <CustomRow justify="center" align="middle">
      <Container>
        <Joke>{joke && joke.value}</Joke>
        <div>
          <CustomButton type="primary" size="large" onClick={handleLinks}>
            Joke
          </CustomButton>
          <CustomButton
            type="primary"
            size="large"
            onClick={() => setStop(!stop)}
          >
            Joke 3s
          </CustomButton>
          <CustomButton type="primary" size="large" onClick={handleLike}>
            Like
          </CustomButton>
          <Link to="/favorite">Favorite</Link>
        </div>
      </Container>
    </CustomRow>
  );
};

const CustomRow = styled(Row)`
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomButton = styled(Button)`
  margin: 10px;
`;

const Joke = styled.p`
  width: 500px;
  margin-bottom: 60px;
`;
