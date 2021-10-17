import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircleOutlined, LoginOutlined } from "@ant-design/icons";
import { Favorites } from "./Favorites";
import { Container, Home } from "./Home";
import { Tabs } from "antd";

export const Joke = () => {
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
  max-height: 100vh;
`;
