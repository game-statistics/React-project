import React from 'react';
// import { Link } from 'react-router-dom';
// import Gamedetails from '../Json/gamedetail.json';

// match.params.id

function Gamepage({ match }) {

  return (
    <main>
      <section>
        <h1>Тут должна быть страница этой игры</h1>
        <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${match.params.id}/header.jpg`} alt='Game logo' />
        <h2><a target='_blank' rel='noreferrer' href={`https://store.steampowered.com/app/${match.params.id}/`}> {match.params.id} </a></h2>
      </section>
    </main>
  )
}

export default Gamepage;