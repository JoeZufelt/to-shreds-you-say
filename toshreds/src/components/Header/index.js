import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className = "itemLeft">Huh-whaa?</li>
                    <li className = "itemCenter"></li>
                    <li className = "itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;