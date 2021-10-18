import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { JokeFromServer } from "../interfaces";
import { Joke } from "../pages/home";
import { addToFavorites, removeFromFavorites } from "../redux/jokes/actions";
import { selectCheckJoke, selectFavorites } from "../redux/jokes/selectors";

export const Chunk: React.FC<{ joke: JokeFromServer }> = ({ joke }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const checkJoke = useSelector(selectCheckJoke(joke?.id || null));

  const handleLike = async () => {
    if (favorites.length > 10) {
      favorites.shift();
    }
    dispatch(addToFavorites(joke));
  };

  const handleDislike = async () => {
    dispatch(removeFromFavorites(joke.id));
  };

  return (
    <Joke>
      <h3 style={{ maxWidth: 500 }}>{joke.value}</h3>
      {!checkJoke ? (
        <HeartOutlined
          onClick={handleLike}
          style={{ fontSize: "30px", color: "#08c" }}
        />
      ) : (
        <Tooltip
          placement="bottom"
          title={() => (
            <>
              The joke is saved in the «Favorites»
              <br />
              <Link to="/favorites">Go to favorites</Link>
            </>
          )}
        >
          <HeartFilled
            onClick={handleDislike}
            style={{ fontSize: "30px", color: "#08c" }}
          />
        </Tooltip>
      )}
    </Joke>
  );
};
