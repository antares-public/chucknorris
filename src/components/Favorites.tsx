/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Row } from "antd";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { JokeFromServer } from "../interfaces";
import { Link } from "react-router-dom";

export const Favorites: React.FC = () => {
  const savedJoke: Array<JokeFromServer> | [] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const [favorite, setFavorite] = useState(savedJoke);
  const favoriteList = favorite.map(({ value, id }) => (
    <Joke key={id}>{value}</Joke>
  ));

  const handleClear = async () => {
    setFavorite([]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <CustomRow justify="center" align="middle">
      <Container>
        <Link to="/">Home</Link>
        <CustomButton type="primary" size="large" onClick={handleClear}>
          Clear History
        </CustomButton>
        <h1>Favorite</h1>
        {favorite.length ? favoriteList : <Joke>Not found</Joke>}
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
`;
