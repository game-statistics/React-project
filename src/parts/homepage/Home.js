import React from 'react';
import GameList from '../other/Gamelist';

function Home() {
  return (
    <main>
      <section className='homepage'>

        <h1 className='Montserrat'>Game Statistics</h1>
        
        <section className='boxes'>
          <div className='box'>
            <h2 className='Montserrat'>hot &#128293;</h2>
            <section className='games games-column'>
              <GameList/>
            </section>
          </div>

          <div className='box'>
            <h2 className='Montserrat'>new &#128511;</h2>
            <section className='games games-column'>
              <GameList/>
            </section>
          </div>
        </section>

      </section>
    </main>
  );
}

export default Home;