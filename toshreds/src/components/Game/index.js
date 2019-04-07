import React from "react";
import "./style.css";

const Game = props => (
    <div className = "card" onClick = {props.imageClick}>
        <div className = "img-container">
            <img alt = {props.name} src = {props.image} />
        </div>
    </div>
);

export default Game;