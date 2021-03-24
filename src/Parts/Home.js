import React from 'react';
import GameList from './Gamelist';

function Home() {
  return (
    <main>
      <section>
        <h1>Game Statistics</h1>
        <div className='box'>
          <span className='header2'><h2>hot &#128293;</h2></span>
          <section className='games'>
            <section className='games-column'>
              <GameList size={'small'} />
            </section>
            <section className='games-column'>
              <GameList size={'small'} />
            </section>
          </section>
        </div>

        <div className='box'>
          <span className='header2'><h2>new &#128511;</h2></span>
          <section className='games'>
            <section className='games-column'>
              <GameList size={'small'} />
            </section>
            <section className='games-column'>
              <GameList size={'small'} />
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Home;