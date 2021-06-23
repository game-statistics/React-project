import React from "react";
import GameByScore from "../requests/GameByScore";
import GameByDate from "../requests/GameByDate";
import GameComingSoon from "../requests/GameComingSoon";

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

        <section className="box">
            <div className="header-games sticky">
              <h2>Coming soon</h2>
            </div>
            <section className="games-coming-soon">
              <GameComingSoon />
            </section>
            <div className="footer-games sticky" />
        </section>
      </section>
    </main>
  );
}

export default Home;
