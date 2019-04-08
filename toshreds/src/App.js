import React, { Component } from 'react';
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Characters from "./images.json";

class App extends Component {

    state = {
      Characters,
      clicked: [],
      score: 0
    };

  clickedIcon = id => {
    this.setState(oldState => ({
      clicked: [oldState.clicked, id]
    }));
  };

  iconClick = id => {
    const newClicked = id;
    this.clickedIcon(newClicked);
    // const icon = event.target.alt;
    // const clickedIcon = this.state.clicked.indexOf(icon) > -1;

    if (this.state.clicked.indexOf(newClicked === -1)) {
      this.setState({
        Characters: this.state.Characters.sort(() => 0.5 - Math.random()),
        clicked: [],
        score: 0
      });
      alert("Not great. You lost.");
    } else {
      this.setState({
        Characters: this.state.Characters.sort(() => 0.5 - Math.random()),
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
      <div>
        <Header
          score={this.state.score}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.Characters.map(character => (
            <Game
              iconClick={this.iconClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
