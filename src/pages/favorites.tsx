import React from "react";
import { Container, CustomRow, Joke } from "./home";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites, removeFromFavorites } from "../redux/jokes/actions";
import { Button } from "antd";
import { selectFavorites } from "../redux/jokes/selectors";
import { HeartFilled } from "@ant-design/icons";

export const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const favoritesList = favorites.map(({ value, id }) => {
    const handleDislike = async () => {
      dispatch(removeFromFavorites(id));
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
    dispatch(clearFavorites());
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
