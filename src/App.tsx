/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Row } from "antd";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { JokeFromServer } from "./interfaces";

export const App: React.FC = () => {
  const [joke, setJoke] = useState<JokeFromServer>();
  const [stop, setStop] = useState(false);

  const fetchLinksApi = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      return await res.json();
    } catch (e) {
      return e;
    }
  };

  const fetchLinks = async () => {
    try {
      const res = await fetchLinksApi();
      setJoke(res);
    } catch (e) {
      return e;
    }
  };

  const fetchLinksTime = async (value: boolean) => {
    try {
      if (value) {
        setTimeout(() => {
          fetchLinks();
        }, 3000);
      }
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    fetchLinksTime(stop);
  }, [stop, fetchLinksTime]);

  return (
    <CustomRow justify="center" align="middle">
      <Container>
        <Joke>{joke && joke.value}</Joke>

        <div>
          <CustomButton type="primary" size="large" onClick={fetchLinks}>
            Joke
          </CustomButton>
          <CustomButton
            type="primary"
            size="large"
            onClick={() => setStop(!stop)}
          >
            Joke 3s
          </CustomButton>
          <CustomButton type="primary" size="large">
            Like
          </CustomButton>
        </div>
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

const Joke = styled.div`
  max-width: 500px;
  margin-bottom: 60px;
`;
