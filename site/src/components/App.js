import React from 'react';
import logo from '../assets/PokeGuesser1.png';
import pikachu from '../assets/Pikachu.png';
import '../styles/App.css';
import Footer from './Footer';
import config from '../config';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <p className="instructions">
            Choose a random Pok&eacute;mon
            <br />
            and I will guess it correctly!
          </p>
          <img src={pikachu} className="pikachu" alt="logo" />
          <br/>
          <button className="play-button">
            Play
          </button>
        </div>
        <Footer />
      </div>
    );
  }

}
