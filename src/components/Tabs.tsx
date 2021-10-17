import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircleOutlined, LoginOutlined } from "@ant-design/icons";
import { Favorites } from "../pages/favorites";
import { Container, Home } from "../pages/home";
import { Tabs } from "antd";
import { JokeFromServer } from "../interfaces";

export const Jokes = () => {
  const savedJokes: Array<JokeFromServer> | [] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const [favorites, setFavorites] = useState(savedJokes);
  let location = useLocation();
  let history = useHistory();
  const { TabPane } = Tabs;

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
          <Home favorites={favorites} setFavorites={setFavorites} />
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
          <Favorites favorites={favorites} setFavorites={setFavorites} />
        </TabPane>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(Tabs)`
  max-height: 100vh;
`;
