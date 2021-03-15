import React from 'react';
import pikachu from '../assets/Pikachu.png';

export default class Play extends React.Component {

  render() {
    return (
      <>
        <p className="instructions">
          Choose a random <a className="App-link" href="https://pokemondb.net/pokedex/all" target="_blank">Pok&eacute;mon</a>
          <br />
          and I will guess it correctly!
        </p>
        <img src={pikachu} className="pikachu" alt="logo" />
        <br />
        <button className="play-button" onClick={this.props.startGame}>
          <span className="play-button-text">Play</span>
        </button>
      </>
    )
  }

}