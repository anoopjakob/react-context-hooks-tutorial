import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContenxt";

class Booklist extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        style={{ background: theme.bg, color: theme.syntax }}
        className="book-list"
      >
        <ul>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
          <li style={{ background: theme.ui }}>The way of kings</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
