import React from "react";
import { CovidInfo } from "../src/interfaces/covidInterface";

interface CountriesTableProps {
  tableData: CovidInfo[];
}
export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <div>
      <table>
        <tbody>
          {props?.tableData.map(({ country, cases }, index: number) => (
            <tr key={index}>
              <td>{country}</td>
              <td>{Number(cases).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
