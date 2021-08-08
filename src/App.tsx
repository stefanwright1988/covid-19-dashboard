import { useContext, useEffect } from "react";
import StyledApp from "./App.styled";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import { AppContext } from "./context/AppContext";
import { CovidInfo } from "./interfaces/covidInterface";
import { getCountries } from "./api/covidFetch";
import { orderTableDataBy } from "./helpers/orderCovidData";

function App() {
  const {
    updateCountries,
    updateCountry,
    updateTableData,
    updateMapCountries,
  } = useContext(AppContext);

  useEffect(() => {
    const getAllCountries = async () => {
      const response: CovidInfo[] = await getCountries();

      const countryList = response.map((country: CovidInfo) => ({
        label: country.country,
        value: country.countryInfo.iso3,
      }));

      countryList.unshift({ label: "Worldwide", value: "worldwide" });
      updateCountries(countryList);
      const orderedTableData: CovidInfo[] = orderTableDataBy(
        response,
        "cases",
        "desc"
      );
      updateTableData(orderedTableData);
      updateMapCountries(response);
      updateCountry({ label: "Worldwide", value: "worldwide" });
    };
    getAllCountries();
  }, []);
  return (
    <StyledApp>
      {/* <SidebarContainer /> */}
      <ContentContainer />
    </StyledApp>
  );
}

export default App;
