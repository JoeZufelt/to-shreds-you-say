import React, { Component } from 'react';
import Game from "./components/Images";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Title>To Shreds You Say...</Title>
        {this.state.Game.map(images => (
          <Game
            id = {images.id}
            image = {images.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
