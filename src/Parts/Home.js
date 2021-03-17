import React from "react";

function Home() {
  return (
    <main>
      <section>
        <h1>Game Statistics</h1>
        <div className="box">
          <h2>HOT</h2>
          <section className="games">
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
          </section>
        </div>
        <div className="box">
          <h2>NEW</h2>
          <section className="games">
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
            <section className="games-column">
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
              <div className="game">Pic / Name game / 10/10 / </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Home;