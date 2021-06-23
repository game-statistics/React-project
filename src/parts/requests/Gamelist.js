import React from "react";
import { Link } from "react-router-dom";
import Gamedetails from "../../json/gamedetail.json";

function GameList(props) {

  function Developers(mass) {
    const devels = mass.developers;
    if (devels.length > 1) {
      return <h5>{devels[0]} ...</h5>;
    } else {
      return <h5>{devels[0]}</h5>;
    }
  }

  return (
    <>
      {Gamedetails.map((item) => (
        <Link to={`/games/${item.game_id}`} key={item.game_id} className={`game`}>
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

export default GameList;
