/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Row } from "antd";
import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { JokeFromServer } from "../interfaces";
import { apiFetchJoke } from "../api/joke";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { selectFavorites } from "../redux/jokes/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/jokes/actions";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [joke, setJoke] = useState<JokeFromServer>();
  const [stop, setStop] = useState(false);

  const checkJoke = favorites.find((f) => f.id === joke?.id);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleLinks = async () => {
    const res = await apiFetchJoke();
    setJoke(res);
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

  const handleLike = async () => {
    if (favorites.length > 10) {
      favorites.shift();
    }
    if (joke) {
      dispatch(addToFavorites(joke));
    }
  };

  const handleDislike = async () => {
    if (joke) dispatch(removeFromFavorites(joke.id));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    handleTime(stop);
  }, [stop, handleTime]);

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
        </div>
        {joke && (
          <Joke>
            <h3 style={{ width: 500 }}>{joke.value}</h3>
            {!checkJoke ? (
              <HeartOutlined
                onClick={handleLike}
                style={{ fontSize: "30px", color: "#08c" }}
              />
            ) : (
              <HeartFilled
                onClick={handleDislike}
                style={{ fontSize: "30px", color: "#08c" }}
              />
            )}
          </Joke>
        )}
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
