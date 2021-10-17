import { Button } from "antd";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { JokeFromServer } from "../interfaces";
import { Container, CustomRow } from "./Home";

export const Favorites: React.FC = () => {
  const savedJoke: Array<JokeFromServer> | [] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const [favorites, setFavorites] = useState(savedJoke);
  const favoritesList = favorites.map(({ value, id }) => (
    <Joke key={id}>{value}</Joke>
  ));

  const handleClear = async () => {
    setFavorites([]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <CustomRow justify="center">
      <Container>
        <h1>Favorite</h1>
        <Button type="primary" size="large" onClick={handleClear}>
          Clear History
        </Button>
        {favorites.length ? favoritesList : <Joke>Not found</Joke>}
      </Container>
    </CustomRow>
  );
};

const Joke = styled.h3`
  width: 500px;
  margin-top: 10px;
`;
