import React from "react";
import styled from "styled-components";
import { percentage } from "../../helpers/number";
import { CovidInfo } from "../../interfaces/covidInterface";

interface CountriesTableProps {
  tableData: CovidInfo[];
}
const FullWidthTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    background-color: #ddd;
    position: sticky;
    top: 0;
    z-index: 9999;
  }
  tr {
    &:nth-child(even) {
      background: mediumseagreen;
    }

    &:nth-child(odd) {
      background: royalblue;
    }
  }
`;
const FullWidthTableContainer = styled.div`
  height: 400px;
  overflow: auto;
  width: 100%;
`;
export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <FullWidthTableContainer>
      <FullWidthTable>
        <thead>
          <th>Country</th>
          <th>Cases</th>
          <th>Cases %</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Active</th>
        </thead>
        <tbody>
          {props?.tableData.map(
            (
              { country, population, cases, deaths, recovered, active },
              index: number
            ) => (
              <tr key={index}>
                <td>{country}</td>
                <td>{Number(cases).toLocaleString()}</td>
                <td>{percentage(Number(cases), Number(population))}</td>
                <td>{Number(deaths).toLocaleString()}</td>
                <td>{Number(recovered).toLocaleString()}</td>
                <td>{Number(active).toLocaleString()}</td>
              </tr>
            )
          )}
        </tbody>
      </FullWidthTable>
    </FullWidthTableContainer>
  );
};
