import React from "react";
import StyledApp from "./App.styled";
import SidebarContainer from "./components/SidebarContainer/SidebarContainer";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
  return (
    <StyledApp>
      <SidebarContainer />
      <ContentContainer />
    </StyledApp>
  );
}

export default App;
