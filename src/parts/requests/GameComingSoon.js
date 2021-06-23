import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Developers(mass) {
  let devels = mass.developers;
  if (devels === null) {
    return <div />;
  } else {
    return <h5>{devels}</h5>;
  }
}

function GameComingSoon(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://game-statistic-sv.herokuapp.com/api/GameComingSoon",
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
          <div className="reales-date">
            release date: {item.date.slice(8, 10)}.
            {item.date.slice(5, 7)}.
            {item.date.slice(0, 4)}
          </div>
          <hr noshade />
          <div className="ohter">
            <span className="image">
              <img
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.game_id}/header.jpg`}
                alt="Game logo"
              />
            </span>
            <span>
              <h4>{item.name}</h4>
              <Developers developers={item.developers} />
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default GameComingSoon;
