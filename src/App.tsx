import { useContext, useEffect } from "react";
import StyledApp from "./App.styled";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import { AppContext } from "./context/AppContext";
import { CovidInfo } from "./interfaces/covidInterface";
import { getCountries } from "./api/covidFetch";
import { orderTableDataBy } from "./helpers/orderCovidData";

function App() {
  return (
    <StyledApp>
      {/* <SidebarContainer /> */}
      <ContentContainer />
    </StyledApp>
  );
}

export default App;
