import React from "react";
import "./game.css";

const Game = props => (
    <div className = "card" onClick = {props.iconClick}>
        <div className = "img-container">
            <img alt = {props.id} src = {props.image} />
        </div>
    </div>
);

export default Game;