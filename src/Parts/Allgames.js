import React from 'react';
import GameList from './Gamelist';

function Allgames() {

  // const size = {
  //   name: 'big'
  // };

  return (
    <main>
      <section className='games-column'>
        <GameList size={'big'} />
      </section>
      <section>
      </section>
    </main>
  );
}

export default Allgames;