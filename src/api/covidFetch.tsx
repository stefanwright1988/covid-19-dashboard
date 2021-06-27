const HOST_VERSION = "v3";
const HOST_NAME = `https://disease.sh/`;
const BASE_URL = `${HOST_NAME}${HOST_VERSION}/covid-19`;
const ALL_URL = `${BASE_URL}/all`;
const ALL_HISTORICAL_URL = `${BASE_URL}/historical/all`;
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

const getGlobalCovidInfo = async () => {
  try {
    const response = await fetch(`${ALL_URL}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getCovidInfoByCountryCode = async (countryCode: string) => {
  try {
    const response = await fetch(`${COUNTRIES_URL}/${countryCode}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getGlobalCovidHistory = async (days: number) => {
  try {
    const response = await fetch(`${ALL_HISTORICAL_URL}?lastdays=${days}`);
    let data = await response.json();
    data = transposeResponse(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
function transposeResponse(data: any) {
  var propertyNames = Object.getOwnPropertyNames(data);
  var newData: any = {};
  for (var i in propertyNames) {
    newData[propertyNames[i]] = [];
    var children = Object.entries(data[propertyNames[i]]);
    console.log(children);
    for (var j of children) {
      var newObj: any = {};
      newObj["date"] = j[0];
      newObj["reports"] = j[1];
      newData[propertyNames[i]].push(newObj);
    }
  }
  return newData;
}

export {
  getCountries,
  getGlobalCovidInfo,
  getCovidInfoByCountryCode,
  getGlobalCovidHistory,
};
