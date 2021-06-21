import React, { Component } from "react";
import StyledHeader from "./Header.styled";

export class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>COVID-19 Tracker</h1>
      </StyledHeader>
    );
  }
}

export default Header;
