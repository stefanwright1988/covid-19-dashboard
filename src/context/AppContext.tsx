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
  covidInfoError: boolean;
  updateCovidInfoError: (value: boolean) => void;
  covidInfoErrorText: string;
  updateCovidInfoErrorText: (value: string) => void;
  tableData: CovidInfo[];
  updateTableData: (value: CovidInfo[]) => void;
  mapCountries: CovidInfo[];
  updateMapCountries: (value: CovidInfo[]) => void;
  globalCovidHistory: CovidHistory;
  updateGlobalCovidHistory: (value: CovidHistory) => void;
  globalCovidHistoryError: boolean;
  updateGlobalCovidHistoryError: (value: boolean) => void;
  globalCovidHistoryErrorText: string;
  updateGlobalCovidHistoryErrorText: (value: string) => void;
  mapCenter: [number, number];
  updateMapCenter: (value: [number, number]) => void;
  mapZoom: number;
  updateMapZoom: (value: number) => void;
  caseTypes: ["cases", "active", "deaths", "recovered"];
  activeCaseType: "cases" | "active" | "deaths" | "recovered";
  updateActiveCaseType: (value: "cases" | "deaths" | "recovered") => void;
  nextCaseType: "cases" | "active" | "deaths" | "recovered";
  updateNextCaseType: (value: "cases" | "deaths" | "recovered") => void;
  previousCaseType: "cases" | "active" | "deaths" | "recovered";
  updatePreviousCaseType: (value: "cases" | "deaths" | "recovered") => void;
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
  covidInfoError: false,
  updateCovidInfoError: (value: boolean) => {},
  covidInfoErrorText: "",
  updateCovidInfoErrorText: (value: string) => {},
  tableData: [],
  updateTableData: (value: CovidInfo[]) => {},
  mapCountries: [],
  updateMapCountries: (value: CovidInfo[]) => {},
  mapCenter: [40, 34],
  updateMapCenter: (value: [number, number]) => {},
  mapZoom: 0,
  updateMapZoom: (value: number) => {},
  globalCovidHistory: { active: [], cases: [], recovered: [], deaths: [] },
  updateGlobalCovidHistory: (value: CovidHistory) => {},
  globalCovidHistoryError: false,
  updateGlobalCovidHistoryError: (value: boolean) => {},
  globalCovidHistoryErrorText: "",
  updateGlobalCovidHistoryErrorText: (value: string) => {},
  caseTypes: ["cases", "active", "deaths", "recovered"],
  activeCaseType: "cases",
  updateActiveCaseType: (value: "cases" | "deaths" | "recovered") => {},
  previousCaseType: "recovered",
  updatePreviousCaseType: (value: "cases" | "deaths" | "recovered") => {},
  nextCaseType: "deaths",
  updateNextCaseType: (value: "cases" | "deaths" | "recovered") => {},
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
  const [covidInfoError, setCovidInfoError] = useState(false);
  const updateCovidInfoError = (value: boolean) => {
    setCovidInfoError(value);
  };
  const [covidInfoErrorText, setCovidInfoErrorText] = useState("");
  const updateCovidInfoErrorText = (value: string) => {
    setCovidInfoErrorText(value);
  };
  const [globalCovidHistory, setGlobalCovidHistory] = useState<CovidHistory>({
    active: [],
    cases: [],
    recovered: [],
    deaths: [],
  });
  const updateGlobalCovidHistory = (value: CovidHistory) => {
    setGlobalCovidHistory(value);
  };
  const [globalCovidHistoryError, setGlobalCovidHistoryError] = useState(false);
  const updateGlobalCovidHistoryError = (value: boolean) => {
    setGlobalCovidHistoryError(value);
  };
  const [globalCovidHistoryErrorText, setGlobalCovidHistoryErrorText] =
    useState("");
  const updateGlobalCovidHistoryErrorText = (value: string) => {
    setGlobalCovidHistoryErrorText(value);
  };
  const [tableData, setTableData] = useState<CovidInfo[]>([]);
  const updateTableData = (value: CovidInfo[]) => {
    setTableData(value);
  };
  const [mapCountries, setMapCountries] = useState<CovidInfo[]>([]);
  const updateMapCountries = (value: CovidInfo[]) => {
    setMapCountries(value);
  };
  const [mapCenter, setMapCenter] = useState<[number, number]>([40, 34]);
  const updateMapCenter = (value: [number, number]) => {
    setMapCenter(value);
  };
  const [mapZoom, setMapZoom] = useState(1);
  const updateMapZoom = (value: number) => {
    setMapZoom(value);
  };
  const [caseTypes] = useState<["cases", "active", "deaths", "recovered"]>([
    "cases",
    "active",
    "deaths",
    "recovered",
  ]);
  const [activeCaseType, setActiveCaseType] = useState<
    "cases" | "deaths" | "recovered"
  >("cases");
  const updateActiveCaseType = (value: "cases" | "deaths" | "recovered") => {
    setActiveCaseType(value);
  };
  const [previousCaseType, setPreviousCaseType] = useState<
    "cases" | "deaths" | "recovered"
  >("recovered");
  const updatePreviousCaseType = (value: "cases" | "deaths" | "recovered") => {
    setPreviousCaseType(value);
  };
  const [nextCaseType, setNextCaseType] = useState<
    "cases" | "deaths" | "recovered"
  >("deaths");
  const updateNextCaseType = (value: "cases" | "deaths" | "recovered") => {
    setNextCaseType(value);
  };
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
        covidInfoError,
        updateCovidInfoError,
        covidInfoErrorText,
        updateCovidInfoErrorText,
        globalCovidHistory,
        updateGlobalCovidHistory,
        globalCovidHistoryError,
        updateGlobalCovidHistoryError,
        globalCovidHistoryErrorText,
        updateGlobalCovidHistoryErrorText,
        tableData,
        updateTableData,
        mapCountries,
        updateMapCountries,
        mapCenter,
        updateMapCenter,
        mapZoom,
        updateMapZoom,
        caseTypes,
        activeCaseType,
        updateActiveCaseType,
        previousCaseType,
        updatePreviousCaseType,
        nextCaseType,
        updateNextCaseType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
