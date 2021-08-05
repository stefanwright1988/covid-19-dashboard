import React from "react";
import styled from "styled-components";
import { percentage } from "../../helpers/number";
import { CovidInfo } from "../../interfaces/covidInterface";

interface CountriesTableProps {
  tableData: CovidInfo[];
}

const TableContainer = styled.div`
  display: block;
  margin: 2em auto;
  width: 90%;
  max-width: 900px;
  div {
    box-sizing: border-box;
  }
`;

const TableHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-left: solid 1px #d9d9d9;
  transition: 0.5s;
`;

const TableRow = styled.div`
  width: calc(100% / 6);
  text-align: center;
  padding: 0.5em 0.5em;
  border-right: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9; ;
`;

export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <TableContainer
      className="table-container"
      role="table"
      aria-label="Destinations"
    >
      <TableHeader className="flex-table header" role="rowgroup">
        <TableRow className="flex-row first" role="columnheader">
          Country
        </TableRow>
        <TableRow className="flex-row" role="columnheader">
          Cases
        </TableRow>
        <TableRow className="flex-row" role="columnheader">
          Cases %
        </TableRow>
        <TableRow className="flex-row" role="columnheader">
          Deaths
        </TableRow>
        <TableRow className="flex-row" role="columnheader">
          Recovered
        </TableRow>
        <TableRow className="flex-row" role="columnheader">
          Active
        </TableRow>
      </TableHeader>
      {props?.tableData.map(
        (
          { country, population, cases, deaths, recovered, active },
          index: number
        ) => (
          <div className="flex-table row" role="rowgroup" key={index}>
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-gb"></span>
              {country}
            </div>
            <div className="flex-row" role="cell">
              {Number(cases).toLocaleString()}
            </div>
            <div className="flex-row" role="cell">
              {percentage(Number(cases), Number(population))}
            </div>
            <div className="flex-row" role="cell">
              {Number(deaths).toLocaleString()}
            </div>
            <div className="flex-row" role="cell">
              {Number(recovered).toLocaleString()}
            </div>
            <div className="flex-row" role="cell">
              {Number(active).toLocaleString()}
            </div>
          </div>
        )
      )}
    </TableContainer>
  );
};
