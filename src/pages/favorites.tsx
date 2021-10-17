import { Button } from "antd";
import styled from "styled-components";
import React, { useEffect } from "react";
import { Container, CustomRow } from "./home";
import { JokeFromServer } from "../interfaces";

type Props = {
  favorites: Array<JokeFromServer>;
  setFavorites: (f: []) => void;
};

export const Favorites: React.FC<Props> = ({ favorites, setFavorites }) => {
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
