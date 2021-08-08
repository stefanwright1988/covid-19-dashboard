import React from "react";
import styled from "styled-components";
import { percentage } from "../../helpers/number";
import { CovidInfo } from "../../interfaces/covidInterface";

interface CountriesTableProps {
  tableData: CovidInfo[];
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  height: 50%;
  max-height: 400px;
  margin: 30px 12.5px !important;
  padding: 20px 15px;
  box-shadow: 5px 5px 5px 5px #9f9f9f;
  border-radius: 10px;
`;

const Table = styled.div`
  width: 80%;
  overflow-y: scroll;
  div {
    box-sizing: border-box;
  }
  .header {
    background-color: blue;
    position: sticky;
    top: 0;
  }
`;

const TableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-left: solid 1px #d9d9d9;
  transition: 0.5s;
`;

const TableCell = styled.div`
  width: calc(100% / 6);
  text-align: center;
  padding: 0.5em 0.5em;
  border-right: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9; ;
`;

export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableRow className="header" role="rowgroup">
          <TableCell className="flex-row first" role="columnheader">
            Country
          </TableCell>
          <TableCell role="columnheader">Cases</TableCell>
          <TableCell role="columnheader">Cases %</TableCell>
          <TableCell role="columnheader">Deaths</TableCell>
          <TableCell role="columnheader">Recovered</TableCell>
          <TableCell role="columnheader">Active</TableCell>
        </TableRow>
        {props?.tableData.map(
          (
            { country, population, cases, deaths, recovered, active },
            index: number
          ) => (
            <TableRow className="flex-table row" role="rowgroup" key={index}>
              <TableCell className="flex-row first" role="cell">
                <span className="flag-icon flag-icon-gb"></span>
                {country}
              </TableCell>
              <TableCell role="cell">
                {Number(cases).toLocaleString()}
              </TableCell>
              <TableCell role="cell">
                {percentage(Number(cases), Number(population))}
              </TableCell>
              <TableCell role="cell">
                {Number(deaths).toLocaleString()}
              </TableCell>
              <TableCell role="cell">
                {Number(recovered).toLocaleString()}
              </TableCell>
              <TableCell role="cell">
                {Number(active).toLocaleString()}
              </TableCell>
            </TableRow>
          )
        )}
      </Table>
    </TableContainer>
  );
};
