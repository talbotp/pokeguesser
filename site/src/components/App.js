import React from 'react';
import Play from './Play';
import Game from './Game';
import Footer from './Footer';
import logo from '../assets/PokeGuesser1.png';
import '../styles/App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inGame: false};
  }

  startGame = () => this.setState({inGame: true});

  endGame = () => this.setState({inGame: false});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          {this.state.inGame
            ? <Game endGame={this.endGame} />
            : <Play startGame={this.startGame} />
          }
        </div>
        <Footer />
      </div>
    );
  }

}
