import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GameList(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://game-statistic-sv.herokuapp.com/api/Games",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const items = await data.json();
    setItems(items);
  };

  return (
    <>
      {items.map((item) => (
        <Link
          to={`/games/${item.game_id}`}
          key={item.game_id}
          className={`game`}
        >
          <span className="image">
            <img
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.game_id}/header.jpg`}
              alt="Game logo"
            />
          </span>
          <span>
            <h4>{item.name}</h4>
            <h5>{item.developers}</h5>
          </span>
        </Link>
      ))}
    </>
  );
}

export default GameList;
