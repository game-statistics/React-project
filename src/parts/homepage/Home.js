import React from "react";
import GameList from "../requests/Gamelist";
import GameByScore from "../requests/GameByScore";
import GameByDate from "../requests/GameByDate";

function Home() {
  return (
    <main>
      <section className="homepage">
        <h1>Game Statistics</h1>

        <section className="boxes">
          <div className="box">
            <div className="header-games sticky">
              <h2>best</h2>
            </div>

            <section className="games games-column">
              <GameByScore />
            </section>
            <div className="footer-games sticky" />
          </div>

          <div className="box">
            <div className="header-games sticky">
              <h2>new</h2>
            </div>
            <section className="games games-column">
              <GameByDate />
            </section>
            <div className="footer-games sticky" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
