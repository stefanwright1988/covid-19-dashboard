export interface CovidInfo {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}
export interface CovidHistoryCase {
  date: string;
  reports: number;
}
export interface CovidHistoryDeath {
  date: string;
  reports: number;
}
export interface CovidHistoryRecovered {
  date: string;
  reports: number;
}
export interface CovidHistory {
  cases: CovidHistoryCase[];
  deaths: CovidHistoryDeath[];
  recovered: CovidHistoryRecovered[];
}
export interface Country {
  name: string;
  value: string;
}

export interface CountryListResponse {
  country: string;
  countryInfo: { iso3: string };
}
export interface MapData {
  lat: number;
  long: number;
  zoom: number;
}
