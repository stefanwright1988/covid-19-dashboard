import { CovidHistory, CovidHistoryCase } from "../interfaces/covidInterface";
import { AppContext } from "../context/AppContext";

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

const getCovidInfo = async (countryCode: string, setErrorStatus: any) => {
  try {
    setErrorStatus(false);
    const response =
      countryCode.toLowerCase() === "worldwide"
        ? await fetch(`${ALL_URL}`)
        : await fetch(`${COUNTRIES_URL}/${countryCode}`);

    if (!response.ok) {
      setErrorStatus(true);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCovidHistory = async (
  countryCode: string,
  days: number,
  setErrorStatus: any
) => {
  try {
    setErrorStatus(false);
    const response =
      countryCode.toLowerCase() === "worldwide" || countryCode === ""
        ? await fetch(`${HISTORICAL_URL}/all?lastdays=${days}`)
        : await fetch(`${HISTORICAL_URL}/${countryCode}?lastdays=${days}`);

    if (!response.ok) {
      setErrorStatus(true);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    let data = await response.json();
    data =
      countryCode.toLowerCase() === "worldwide" || countryCode === ""
        ? transposeWorldwideResponse(data)
        : transposeCountryResponse(data.timeline);
    return data;
  } catch (err) {
    console.log(err);
  }
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
