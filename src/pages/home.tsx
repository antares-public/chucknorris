/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Row } from "antd";
import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { JokeFromServer } from "../interfaces";
import { apiFetchJoke } from "../api/joke";
import { selectFavorites } from "../redux/jokes/selectors";
import { useSelector } from "react-redux";
import { Chunk } from "../components/Chunk";

export const Home: React.FC = () => {
  const favorites = useSelector(selectFavorites);
  const [joke, setJoke] = useState<JokeFromServer | "">("");
  const [stop, setStop] = useState(false);

  const handleLinks = async () => {
    const res = await apiFetchJoke();
    setJoke(res);
  };

  const handleClear = async () => {
    setJoke("");
  };

  const handleTime = useCallback(
    async (value: boolean) => {
      if (value) {
        setTimeout(() => {
          handleLinks();
        }, 3000);
      }
    },
    [joke]
  );

  useEffect(() => {
    handleTime(stop);
  }, [stop, handleTime]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <CustomRow justify="center">
      <Container>
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
          <CustomButton type="primary" size="large" onClick={handleClear}>
            Clear
          </CustomButton>
        </div>
        {joke ? <Chunk joke={joke} /> : <Joke />}
      </Container>
    </CustomRow>
  );
};

export const CustomRow = styled(Row)`
  max-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomButton = styled(Button)`
  margin-right: 10px;
`;

export const Joke = styled.div`
  width: 600px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
