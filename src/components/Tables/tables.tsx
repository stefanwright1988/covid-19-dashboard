import React from "react";
import { percentage } from "../../helpers/number";
import { CovidInfo } from "../../interfaces/covidInterface";

interface CountriesTableProps {
  tableData: CovidInfo[];
}
export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
};
