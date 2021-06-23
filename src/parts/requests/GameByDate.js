import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GameByDate(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://game-statistic-sv.herokuapp.com/api/GameByDate",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  function Developers(mass) {
    let devels = mass.developers
    if (devels === null) {
        return <h5></h5>;
    }
    else {
        // devels = devels.slice(2);
        // devels = devels.substring(0, devels.length - 2);
        return <h5>{devels}</h5>;
    }
  }

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
            <Developers developers={item.developers} />
          </span>
        </Link>
      ))}
    </>
  );
}

export default GameByDate;
