import React from 'react';
import config from '../config';
import '../styles/Game.css';
import pokeball from '../assets/Pokeball.png';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, 
      pokemonValues: {}, 
      question: '', 
      field: undefined,
      answers: [],
      answer: undefined,
    };
    this.submit = this.submit.bind(this);
  }

 async componentDidMount() {
    const url = config.api + '/guess';
    const response = await fetch(url);
    const json = await response.json();
    this.setState({
      question: json.question,
      answers: json.answers,
      field: json.field,
      isLoading: false,
    });
  }

  loader() {
    return (
      <>
        <img src={pokeball} className="pokeball-loader" alt="logo" />
        <p>Loading...</p> 
      </>
    );
  }

  question() {
    return (
      <>
        <h2 className="question">{this.state.question}</h2>

        <div className="answers">
          {this.state.answers.map(answerVal => {
            return (
              <label className="container">
                {answerVal}
                <input 
                  type="checkbox"
                  onChange={(e) => {
                    this.selectAnswer({
                      target: {
                        value: answerVal
                      }
                    })
                  }}
                />
                <span className="checkmark"></span>
              </label>
            );
          })}
        </div>

        <div className="Submit">
          <button className="play-button" onClick={this.submit}>
            <span className="play-button-text">Submit</span>
          </button>
        </div>
      </>
    );
  }

  selectAnswer = (e) => {
    this.setState({
      answer: e.target.value
    });
  }

  async guess() {
    const url = config.api + '/guess';
    const response = await fetch(url);
    const json = await response.json();
    this.setState({
      question: json.question,
      answers: json.answers,
      isLoading: false,
    });
  }


  async submit() {
    this.state.pokemonValues[this.state.field] = this.state.answer;

    this.setState({isLoading: true});

    let qs = '';
    for (let key of Object.keys(this.state.pokemonValues)) {
      console.log(this.state.pokemonValues);
      qs += `${key}=${this.state.pokemonValues[key]}&`;
    }
    const url = `${config.api}/guess?${qs}`;

    console.log('Hitting url = ' + url);
    console.log('Hit submit with answer=' + this.state.answer);
    console.log(this.state.field);

    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
  }

  render() {
    return (
      <>
        {this.state.isLoading ? this.loader() : this.question()}
      </>
    );
  }

}
