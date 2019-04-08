import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className = "itemLeft logo col-md-4"><img alt="Planet Exppress" src="https://files.gamebanana.com/img/ico/sprays/51914ee8d3508.png" /></li>
                    <li className = "itemCenter col-md-4"></li>
                    <li className = "itemRight col-md-4">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;