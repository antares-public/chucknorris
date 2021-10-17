import React from "react";
import { Container, CustomRow, Joke } from "./home";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites, removeFromFavorites } from "../redux/jokes/actions";
import { Button } from "antd";
import { selectFavorites } from "../redux/jokes/selectors";
import { LikeChunk } from "../components/LikeChunk";
import { JokeFromServer } from "../interfaces";

export const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleDislike = async (id: JokeFromServer["id"]) => {
    dispatch(removeFromFavorites(id));
  };

  const handleClear = async () => {
    dispatch(clearFavorites());
  };

  const favoritesList = favorites.map(({ value, id }) => {
    return <LikeChunk key={id} value={value} id={id} dislike={handleDislike} />;
  });

  return (
    <CustomRow justify="center">
      <Container>
        <h1>Favorites</h1>
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
  overflow-y: auto;
  height: 500px;
`;
