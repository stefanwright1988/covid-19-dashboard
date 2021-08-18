import React, { useContext, useEffect, useMemo } from "react";
import Select from "react-select";
import SingleValue from "react-select/src/components/SingleValue";
import { getCountries } from "../../api/covidFetch";
import { AppContext } from "../../context/AppContext";
import { orderTableDataBy } from "../../helpers/orderCovidData";
import { CovidInfo } from "../../interfaces/covidInterface";
import StyledHeader from "./Header.styled";

export const Header = () => {
  const {
    countries,
    updateCountries,
    country,
    updateCountry,
    daysToUse,
    updateDaysToUse,
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
    };
    getAllCountries();
  }, []);

  const changeDays = (e: any) => {
    updateDaysToUse({ value: e.value, label: e.label });
  };

  const changeCountry = (e: any) => {
    updateCountry({ value: e.value, label: e.label });
  };

  const daysForSelection = [
    { value: 7, label: "Last 7 days" },
    { value: 30, label: "Last 30 days" },
    { value: 60, label: "Last 60 days" },
    { value: 90, label: "Last 90 days" },
    { value: 180, label: "Last 180 days" },
    { value: 365, label: "Last 365 days" },
  ];

  const selectStyles = useMemo(
    () => ({
      container: (base: any) => ({
        ...base,
        flex: 1,
        padding: "0 10px",
      }),
      control: (base: any, state: any) => ({
        ...base,
        backgroundColor: "#80808c",
        borderColor: "#81818d",
        boxShadow: state.isFocused ? "none" : "none",
        "&:hover": {
          borderColor: "#81818d",
        },
      }),
      singleValue: (base: any) => ({
        ...base,
        color: "#000119",
      }),
      menu: (base: any) => ({
        ...base,
        backgroundColor: "#555666",
        marginTop: "-5px",
        width: "calc(100% - 21px)",
      }),
      option: (base: any, state: { isSelected: any; isFocused: any }) => ({
        ...base,
        backgroundColor: state.isSelected
          ? "#2b2b3f"
          : state.isFocused
          ? "#555666"
          : "#80808c",
        color: state.isSelected ? "#80808c" : "#000119",
      }),
      menuList: (base: any) => ({
        ...base,
        paddingTop: "0px",
        backgroundColor: "#80808c",
        boxShadow:
          "inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2)",
      }),
    }),
    []
  );
  return (
    <StyledHeader>
      <h1>COVID-19 Tracker</h1>
      <div
        style={{
          width: "33%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Select country:</h2>
        <Select
          options={countries}
          defaultValue={country}
          onChange={changeCountry}
          styles={selectStyles}
        />
      </div>

      <div
        style={{
          width: "33%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2>Select date range</h2>
        <Select
          options={daysForSelection}
          defaultValue={daysToUse}
          onChange={changeDays}
          styles={selectStyles}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
