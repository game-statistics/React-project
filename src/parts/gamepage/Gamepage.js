import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

function Meta(param) {
  const item = param.item;
  if (item.metacritic_score !== null) {
    if (item.metacritic_score < 50) {
      return (
        <a
          href={`${item.metacritic_url}`}
          target="_blank"
          rel="noreferrer"
          className="metacritic"
        >
          <span className="metascore red">{item.metacritic_score}</span>
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
        </a>
      );
    } else if (item.metacritic_score < 75) {
      return (
        <a
          href={`${item.metacritic_url}`}
          target="_blank"
          rel="noreferrer"
          className="metacritic"
        >
          <span className="metascore yellow">{item.metacritic_score}</span>
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
        </a>
      );
    } else {
      return (
        <a
          href={`${item.metacritic_url}`}
          target="_blank"
          rel="noreferrer"
          className="metacritic"
        >
          <span className="metascore green">{item.metacritic_score}</span>
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
        </a>
      );
    }
  } else {
    return <div />;
  }
}

function IsFree(param) {
  const item = param.item;
  if (item.is_free) {
    return <div> FREE </div>;
  } else {
    return <div> PAID </div>;
  }
}

function RequiredAge(param) {
  const item = param.item;
  console.log(item);
  if (item.required_age === null) {
    return <div />;
  } else {
    return (
      <div className="row">
        <div className="subtitle">REQUIRED AGE:</div>
        <div>{item.required_age}+</div>
      </div>
    );
  }
}

function Gamepage({ match }) {
  useEffect(() => {
    fetchItem();
  });

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const data = await fetch(
      `https://game-statistic-sv.herokuapp.com/api/GameById/${match.params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const item = await data.json();
    setItem(item[0]);
  };

  return (
    <main>
      <section className="gamepage">
        <div className="highlights">
          <div className="sticky">
            <div className="gameName">{item.name}</div>

            <div className="imagelogo">
              <img
                src={`https://cdn.akamai.steamstatic.com/steam/apps/${match.params.id}/header.jpg`}
                alt="Game logo"
              />
            </div>

            <Meta item={item} />

            <div className="steam-score">
              <div className="score">{item.steamscore_description}</div>
              <div className="row">
                <div className="subtitle">STEAM SCORE:</div>
                <div>{item.steamscore_percent}%</div>
              </div>
              <div className="row">
                <div className="subtitle">REVIEWS:</div>
                <div>{item.steamscore_quantity}</div>
              </div>
            </div>

            <div className="details">
              <RequiredAge item={item} />
              <div className="row">
                <div className="subtitle">DEVELOPER:</div>
                <div>{item.developers}</div>
              </div>

              <div className="row">
                <div className="subtitle">GENRE:</div>
                <div>Gemre</div>
              </div>

              <div className="row">
                <div className="subtitle">P/F:</div>
                <IsFree item={item} />
              </div>

              <a
                target="_blank"
                rel="noreferrer"
                href={`https://store.steampowered.com/app/${match.params.id}/`}
              >
                Steam Link
              </a>
            </div>
          </div>
        </div>
        <div className="description">
          <h2>About the game</h2>
          {parse(`${item.about_the_game}`)}
        </div>
      </section>
    </main>
  );
}

export default Gamepage;
