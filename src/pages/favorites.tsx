import { Button } from "antd";
import React from "react";
import { Container, CustomRow, Joke } from "./home";
import { JokeFromServer } from "../interfaces";
import { HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

type Props = {
  favorites: Array<JokeFromServer>;
  setFavorites: (f: any) => void;
};

export const Favorites: React.FC<Props> = ({ favorites, setFavorites }) => {
  const favoritesList = favorites.map(({ value, id }) => {
    const handleDislike = async () => {
      setFavorites((prevState: any) =>
        prevState.filter((f: any) => f.id !== id)
      );
    };
    return (
      <Joke key={id}>
        <h3 style={{ width: 500 }}>{value}</h3>
        <HeartFilled
          onClick={handleDislike}
          style={{ fontSize: "30px", color: "#08c" }}
        />
      </Joke>
    );
  });

  const handleClear = async () => {
    setFavorites([]);
  };

  return (
    <CustomRow justify="center">
      <Container>
        <h1>Favorite</h1>
        <Button type="primary" size="large" onClick={handleClear}>
          Clear History
        </Button>
        <ScrollControl>
          {favorites.length ? favoritesList : <Joke>Not found</Joke>}
        </ScrollControl>
      </Container>
    </CustomRow>
  );
};

export const ScrollControl = styled.div`
  margin-top: 20px;
  overflow: auto;
  height: 500px;
`;
