import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

function Meta(param) {
  const item = param.item;
  if (item.metacritic_score === null || item.metacritic_score === undefined) {
    return <div />;
  } else {
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
  if (item.required_age === null || item.required_age === undefined) {
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

function SteamScore(param) {
  const item = param.item;
  if (
    item.steamscore_quantity === null ||
    item.steamscore_quantity === undefined
  ) {
    return <div />;
  } else {
    return (
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
    );
  }
}

function Date(param) {
  const item = param.item;
  if (item.date === null || item.date === undefined) {
    return <div />;
  } else {
    //   const date = item.date.slice(8, 10)+item.date.slice(5, 7)+item.date.slice(0, 4);
    return (
      <div className="row">
        <div className="subtitle">RELEASE DATE:</div>
        <div>
          {item.date.slice(8, 10)}.{item.date.slice(5, 7)}.
          {item.date.slice(0, 4)}
          {/* {item.date} */}
        </div>
      </div>
    );
  }
}

function GameGenre(params) {
  const match = params.match;
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      `https://game-statistic-sv.herokuapp.com/api/GenreByGameId/${match.params.id}`,
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
        <div key={item.genre_name}>{item.genre_name}</div>
      ))}
    </>
  );
}

function Gamepage({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

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

            <SteamScore item={item} />

            <div className="details">
              <RequiredAge item={item} />

              <Date item={item} />

              <div className="row">
                <div className="subtitle">DEVELOPER:</div>
                <div>{item.developers}</div>
              </div>

              <div className="row">
                <div className="subtitle">GENRE:</div>
                <div>
                  <GameGenre match={match} />
                </div>
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
