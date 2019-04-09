import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-default navbar-fixed-top">
            <div className = "container-fluid">
                <img className = "logo" alt = "Planet Express Logo" src = "https://files.gamebanana.com/img/ico/sprays/51914ee8d3508.png" />
                <ul className = "nav justify-content-end scoreText">
                    <li className = "nav-item">
                        Score: {this.props.score}
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Header;