import React from "react";
import styled from "styled-components";
import { useRoutes } from "./routes";

export const App: React.FC = () => {
  const routes = useRoutes();
  return <Container>{routes}</Container>;
};

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;
