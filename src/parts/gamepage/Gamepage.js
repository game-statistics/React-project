import React from "react";
// import { Link } from 'react-router-dom';

function GameName() {
  return <div className="gameName Montserrat">Game Name</div>;
}

function GameLogo(params) {
  let match = params.match;
  return (
    <div className="imagelogo">
      <img
        src={`https://cdn.akamai.steamstatic.com/steam/apps/${match.params.id}/header.jpg`}
        alt="Game logo"
      />
    </div>
  );
}

function Metacritic() {
  return (
    <div className="metacritic">
      <span className="metascore">45</span>
      <span className="metalogo">
        <img
          className=""
          src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
          alt="Metacritic logo icon"
          id="Metaicon"
        />
        <img
          src="https://www.metacritic.com/images/icons/metacritic-wordmark.svg"
          alt="Metacritic logo text"
          id="Metatext"
        />
      </span>
    </div>
  );
}

function GameDetails(params) {
  let match = params.match;
  return (
    <div className="details">
      <div className="row">
        <div className="subtitle">DEVELOPER:</div>
        <div>Developer</div>
      </div>

      <div className="row">
        <div className="subtitle">GENRE:</div>
        <div>Gemre</div>
      </div>

      <div className="row">
        <div className="subtitle">P/F:</div>
        <div>Free</div>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={`https://store.steampowered.com/app/${match.params.id}/`}
      >
        Steam Link
      </a>
    </div>
  );
}

function Gamepage({ match }) {
  return (
    <main>
      <section className="gamepage">
        <div className="highlights">
          <div className="sticky">
            <GameName />
            <GameLogo match={match} />
            <Metacritic />
            <GameDetails match={match} />
          </div>
        </div>
        <div className="description">
          <h2>About the game</h2>
        </div>
      </section>
    </main>
  );
}

export default Gamepage;
