import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import StyledApp from "./App.styled";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <StyledApp>
      <Header />
      <Sidebar />
      <Content />
    </StyledApp>
  );
}

export default App;
