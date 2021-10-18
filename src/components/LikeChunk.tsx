import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { Joke } from "../pages/home";
import { JokeFromServer } from "../interfaces";

type Props = {
  id: JokeFromServer["id"];
  value: JokeFromServer["value"];
  dislike: (id: JokeFromServer["id"]) => void;
};

export const LikeChunk: React.FC<Props> = ({ id, value, dislike }) => (
  <Joke>
    <h3 style={{ maxWidth: 500 }}>{value}</h3>
    <HeartFilled
      onClick={dislike.bind(null, id)}
      style={{ fontSize: "30px", color: "#08c" }}
    />
  </Joke>
);
