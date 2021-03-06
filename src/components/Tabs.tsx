import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { HeartOutlined, SmileOutlined } from "@ant-design/icons";
import { Favorites } from "../pages/favorites";
import { Home } from "../pages/home";
import { Tabs } from "antd";
import { JokeList } from "../interfaces";
import { fetchToFavorites } from "../redux/jokes/actions";
import { useDispatch } from "react-redux";

export const Jokes = () => {
  const savedJokes: JokeList = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { TabPane } = Tabs;

  useEffect(() => {
    dispatch(fetchToFavorites(savedJokes));
  }, [dispatch, savedJokes]);

  return (
    <Wrapper
      activeKey={location.pathname}
      onChange={(key) => {
        history.push(`${key}`);
      }}
    >
      <TabPane
        tab={
          <span>
            <SmileOutlined />
            Joke
          </span>
        }
        key="/home"
      >
        <Home />
      </TabPane>
      <TabPane
        tab={
          <span>
            <HeartOutlined />
            Favorites
          </span>
        }
        key="/favorites"
      >
        <Favorites />
      </TabPane>
    </Wrapper>
  );
};

const Wrapper = styled(Tabs)`
  height: 100vh;
`;
