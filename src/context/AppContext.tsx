import React, { createContext } from "react";
import { useState } from "react";
import { Country, CovidHistory, CovidInfo } from "../interfaces/covidInterface";

type IContext = {
  loading: boolean;
  updateLoading: (value: boolean) => void;
  countries: Country[];
  updateCountries: (value: Country[]) => void;
  country: Country;
  updateCountry: (value: Country) => void;
  daysToUse: { value: number; label: string };
  updateDaysToUse: (value: { value: number; label: string }) => void;
  covidInfo: CovidInfo | undefined;
  updateCovidInfo: (value: CovidInfo | undefined) => void;
  tableData: CovidInfo[];
  updateTableData: (value: CovidInfo[]) => void;
  mapCountries: CovidInfo[];
  updateMapCountries: (value: CovidInfo[]) => void;
  globalCovidHistory: CovidHistory;
  updateGlobalCovidHistory: (value: CovidHistory) => void;
  mapData: {};
  updateMapData: (value: { lat: number; lng: number; zoom: number }) => void;
  caseTypes: ["cases", "active", "deaths", "recovered"];
};

export const AppContext = createContext<IContext>({
  loading: false,
  updateLoading: (value) => {},
  countries: [],
  updateCountries: (value) => {},
  country: { label: "worldwide", value: "Worldwide" },
  updateCountry: (value: Country) => {},
  daysToUse: { value: 7, label: "Last 7 days" },
  updateDaysToUse: (value: { value: number; label: string }) => {},
  covidInfo: undefined,
  updateCovidInfo: (value: CovidInfo | undefined) => {},
  tableData: [],
  updateTableData: (value: CovidInfo[]) => {},
  mapCountries: [],
  updateMapCountries: (value: CovidInfo[]) => {},
  globalCovidHistory: { cases: [], recovered: [], deaths: [] },
  updateGlobalCovidHistory: (value: CovidHistory) => {},
  mapData: {},
  updateMapData: (value: { lat: number; lng: number; zoom: number }) => {},
  caseTypes: ["cases", "active", "deaths", "recovered"],
});

const AppContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const updateLoading = (value: boolean) => {
    setLoading(value);
  };
  const [countries, setCountries] = useState<Country[]>([]);
  const updateCountries = (value: Country[]) => {
    setCountries(value);
  };
  const [country, setCountry] = useState<Country>({
    value: "worldwide",
    label: "Worldwide",
  });
  const updateCountry = (value: Country) => {
    setCountry(value);
  };
  const [daysToUse, setDaysToUse] = useState({
    value: 7,
    label: "Last 7 days",
  });
  const updateDaysToUse = (value: { value: number; label: string }) => {
    setDaysToUse(value);
  };
  const [covidInfo, setCovidInfo] = useState<CovidInfo | undefined>(undefined);
  const updateCovidInfo = (value: CovidInfo | undefined) => {
    setCovidInfo(value);
  };
  const [globalCovidHistory, setGlobalCovidHistory] = useState<CovidHistory>({
    cases: [],
    recovered: [],
    deaths: [],
  });
  const updateGlobalCovidHistory = (value: CovidHistory) => {
    setGlobalCovidHistory(value);
  };
  const [tableData, setTableData] = useState<CovidInfo[]>([]);
  const updateTableData = (value: CovidInfo[]) => {
    setTableData(value);
  };
  const [mapCountries, setMapCountries] = useState<CovidInfo[]>([]);
  const updateMapCountries = (value: CovidInfo[]) => {
    setMapCountries(value);
  };
  const [mapData, setMapData] = useState({
    lat: 34.80746,
    lng: -40.4796,
    zoom: 3,
  });
  const updateMapData = (value: { lat: number; lng: number; zoom: number }) => {
    setMapData(value);
  };
  const [caseTypes] = useState<["cases", "active", "deaths", "recovered"]>([
    "cases",
    "active",
    "deaths",
    "recovered",
  ]);
  return (
    <AppContext.Provider
      value={{
        loading,
        updateLoading,
        countries,
        updateCountries,
        country,
        updateCountry,
        daysToUse,
        updateDaysToUse,
        covidInfo,
        updateCovidInfo,
        globalCovidHistory,
        updateGlobalCovidHistory,
        tableData,
        updateTableData,
        mapCountries,
        updateMapCountries,
        mapData,
        updateMapData,
        caseTypes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
