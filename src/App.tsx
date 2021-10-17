import React from "react";
import { useRoutes } from "./routes";
import { Container } from "./pages/home";

export const App: React.FC = () => {
  const routes = useRoutes();
  return <Container>{routes}</Container>;
};
