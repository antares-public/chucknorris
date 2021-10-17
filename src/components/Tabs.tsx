import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircleOutlined, LoginOutlined } from "@ant-design/icons";
import { Favorites } from "../pages/favorites";
import { Container, Home } from "../pages/home";
import { Tabs } from "antd";
import { JokeList } from "../interfaces";
import { fetchToFavorites } from "../redux/jokes/actions";
import { useDispatch } from "react-redux";

export const Jokes = () => {
  const savedJokes: JokeList = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();
  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(fetchToFavorites(savedJokes))
  }, [dispatch, savedJokes])

  return (
    <Container>
      <Wrapper
        activeKey={location.pathname}
        onChange={(key: any) => {
          history.push(`${key}`);
        }}
      >
        <TabPane
          tab={
            <span>
              <LoginOutlined />
              List Joke
            </span>
          }
          key="/home"
        >
          <Home />
        </TabPane>
        <TabPane
          tab={
            <span>
              <CheckCircleOutlined />
              Favorites
            </span>
          }
          key="/favorites"
        >
          <Favorites />
        </TabPane>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(Tabs)`
  height: 100vh;
`;
