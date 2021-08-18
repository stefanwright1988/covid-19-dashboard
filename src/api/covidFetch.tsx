import { CovidHistory, CovidHistoryCase } from "../interfaces/covidInterface";
import axios from "axios";

const HOST_VERSION = "v3";
const HOST_NAME = `https://disease.sh/`;
const BASE_URL = `${HOST_NAME}${HOST_VERSION}/covid-19`;
const ALL_URL = `${BASE_URL}/all`;
const HISTORICAL_URL = `${BASE_URL}/historical`;
const COUNTRIES_URL = `${BASE_URL}/countries`;

const getCountries = async () => {
  try {
    const response = await fetch(`${COUNTRIES_URL}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getCovidInfo = async (
  countryCode: string,
  setErrorStatus: any,
  setErrorText: any,
  setCovidHistory: any,
  setLoading: any
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
      //setLoading(false);
    },
    (error) => {
      setErrorStatus(true);
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
      //setLoading(false);
    }
  );
};

const getCovidHistory = async (
  countryCode: string,
  days: number,
  setErrorStatus: any,
  setErrorText: any,
  setCovidHistory: any,
  setLoading: any
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
      //setLoading(false);
    },
    (error) => {
      setErrorStatus(true);
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
      //setLoading(false);
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
    const test: CovidHistoryCase = data[i];
    var children = Object.entries(test);
    for (const j of children) {
      var newObj: CovidHistoryCase = { date: "", reports: 0 };
      newObj.date = j[0];
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
    const test: CovidHistoryCase = data[i];
    var children = Object.entries(test);
    for (const j of children) {
      var newObj: CovidHistoryCase = { date: "", reports: 0 };
      newObj.date = j[0];
      newObj.reports = j[1];
      newData[i as keyof CovidHistory].push(newObj);
    }
  }
  return newData;
}

export { getCountries, getCovidInfo, getCovidHistory };
