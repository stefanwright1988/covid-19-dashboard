import React, { useEffect, useState } from "react";
import { getCountries, getGlobalCovidInfo } from "../../api/covidFetch";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { Country, CovidInfo } from "../../interfaces/covidInterface";
import SimpleMap from "../Map/Map";
import { CountriesTable } from "../Tables/tables";
import StyledContent from "./Content.styled";
import CardsContainer from "../CardsContainer/CardsContainer";
const Content = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [covidInfo, setCovidInfo] = useState<CovidInfo | undefined>(undefined);
  const [tableData, setTableData] = useState<CovidInfo[]>([]);
  const [mapCountries, setMapCountries] = useState<CovidInfo[]>([]);
  const [mapData, setMapData] = useState({
    lat: 34.80746,
    lng: -40.4796,
    zoom: 3,
  });
  const [casesType, setcasesType] =
    useState<"cases" | "deaths" | "recovered">("cases");

  useEffect(() => {
    const getAllCountries = async () => {
      const response: CovidInfo[] = await getCountries();

      const countryList = response.map((country: CovidInfo) => ({
        name: country.country,
        value: country.countryInfo.iso3,
      }));

      countryList.unshift({ name: "Worldwide", value: "worldwide" });
      setCountries(countryList);
      const orderedTableData: CovidInfo[] = orderTableDataBy(
        response,
        "cases",
        "desc"
      );
      setTableData(orderedTableData);
      setMapCountries(response);
      setCountry("worldwide");
    };
    getAllCountries();
  }, []);

  useEffect(() => {
    const getGlobalStats = async () => {
      const response = await getGlobalCovidInfo();
      setCovidInfo(response);
      setIsLoading(false);
    };
    getGlobalStats();
  }, []);
  return (
    <StyledContent>
      <CardsContainer />
      <CountriesTable tableData={tableData} />
      <SimpleMap geoData={(props: any) => props.geoData} />
    </StyledContent>
  );
};

export default Content;
