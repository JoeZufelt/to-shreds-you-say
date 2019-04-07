import React, { Component } from 'react';
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Characters from "./images.json";

class App extends Component {

  state = {
    Characters,
    clicked: [],
    score: 0
  };

  iconClick = event => {
    const icon = event.target.alt;
    const clickedIcon = this.state.clicked.indexOf(icon) > -1;

    if (clickedIcon) {
      this.setState({
        Characters: this.state.Characters.sort(function () {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert("Not great. You lost.");
    } else {
      this.setState({
        Characters: this.state.Characters.sort(function () {
          return 0.5 - Math.random();
        }),
        clickedIcon: this.clickedIcon.concat(icon),
        score: this.state.score + 1
      },
        () => {
          if (this.state.score === 12) {
            alert("Good news! You win.");
            this.setState({
              Characters: this.state.Characters.sort(function () {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
        />
        <Jumbotron />
        {this.state.Characters.map(Characters => (
          <Game
          imageClick = {this.imageClick}
          id = {Characters.id}
          image = {Characters.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
