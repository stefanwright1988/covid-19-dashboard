import {
  Country,
  CovidHistory,
  CovidHistoryCase,
  CovidInfo,
} from "../interfaces/covidInterface";
import axios from "axios";
import { orderTableDataBy } from "../helpers/orderCovidData";

const HOST_VERSION = "v3";
const HOST_NAME = `https://disease.sh/`;
const BASE_URL = `${HOST_NAME}${HOST_VERSION}/covid-19`;
const ALL_URL = `${BASE_URL}/all`;
const HISTORICAL_URL = `${BASE_URL}/historical`;
const COUNTRIES_URL = `${BASE_URL}/countries`;

const getCountries = async (
  updateCountries: { (value: Country[]): void; (arg0: any): void },
  updateTableData: { (value: CovidInfo[]): void; (arg0: CovidInfo[]): void },
  updateMapCountries: { (value: CovidInfo[]): void; (arg0: any): void }
) => {
  axios.get(`${COUNTRIES_URL}`).then(
    (res) => {
      const countryList = res.data.map((country: CovidInfo) => ({
        label: country.country,
        value: country.countryInfo.iso3,
      }));

      countryList.unshift({ label: "Worldwide", value: "worldwide" });
      updateCountries(countryList);
      const orderedTableData: CovidInfo[] = orderTableDataBy(
        res.data,
        "cases",
        "desc"
      );
      updateTableData(orderedTableData);
      updateMapCountries(res.data);
    },
    (err) => {
      console.log(err);
    }
  );
};

const getCovidInfo = async (
  countryCode: string,
  setErrorStatus: any,
  setErrorText: any,
  setCovidHistory: any
) => {
  setErrorStatus(false);
  setErrorText("");
  const getURL =
    countryCode.toLowerCase() === "worldwide"
      ? `${ALL_URL}`
      : `${COUNTRIES_URL}/${countryCode}`;
  axios.get(`${getURL}`).then(
    (res) => {
      setCovidHistory(res.data);
    },
    (error) => {
      setErrorStatus(true);
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
    }
  );
};

const getCovidHistory = async (
  countryCode: string,
  days: number,
  setErrorStatus: any,
  setErrorText: any,
  setCovidHistory: any
) => {
  setErrorStatus(false);
  setErrorText("");
  const getURL =
    countryCode.toLowerCase() === "worldwide" || countryCode === ""
      ? `${HISTORICAL_URL}/all?lastdays=${days}`
      : `${HISTORICAL_URL}/${countryCode}?lastdays=${days}`;
  axios.get(`${getURL}`).then(
    (res) => {
      const data =
        countryCode.toLowerCase() === "worldwide" || countryCode === ""
          ? transposeWorldwideResponse(res.data)
          : transposeCountryResponse(res.data.timeline);
      setCovidHistory(data);
    },
    (error) => {
      setErrorStatus(true);
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
    }
  );
};

function transposeWorldwideResponse(data: any) {
  var propertyNames = Object.getOwnPropertyNames(data);
  var newData: CovidHistory = {
    active: [],
    cases: [],
    recovered: [],
    deaths: [],
  };
  for (var i of propertyNames) {
    newData[i as keyof CovidHistory] = [];
    const historyItem: CovidHistoryCase = data[i];
    var children = Object.entries(historyItem);
    for (const j of children) {
      var newObj: CovidHistoryCase = { date: "", reports: 0 };
      var dateSplit = j[0].split("/");
      var day = Number(dateSplit[1]);
      var month = Number(dateSplit[0]) - 1;
      var year = Number(dateSplit[2]) + 2000;
      var date = new Date(year, month, day).getTime().toString();
      newObj.date = date;
      newObj.reports = j[1];
      newData[i as keyof CovidHistory].push(newObj);
    }
  }
  return newData;
}
function transposeCountryResponse(data: any) {
  var propertyNames = Object.getOwnPropertyNames(data);
  var newData: CovidHistory = {
    active: [],
    cases: [],
    recovered: [],
    deaths: [],
  };
  for (var i of propertyNames) {
    newData[i as keyof CovidHistory] = [];
    const historyItem: CovidHistoryCase = data[i];
    var children = Object.entries(historyItem);
    for (const j of children) {
      var newObj: CovidHistoryCase = { date: "", reports: 0 };
      var dateSplit = j[0].split("/");
      var day = Number(dateSplit[1]);
      var month = Number(dateSplit[0]) - 1;
      var year = Number(dateSplit[2]) + 2000;
      var date = new Date(year, month, day).getTime().toString();
      newObj.date = date;
      newObj.reports = j[1];
      newData[i as keyof CovidHistory].push(newObj);
    }
  }
  return newData;
}

export { getCountries, getCovidInfo, getCovidHistory };
