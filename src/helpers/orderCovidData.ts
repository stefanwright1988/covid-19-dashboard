import { CovidInfo } from "../interfaces/covidInterface";
import _, { Many } from "lodash";

export const orderTableDataBy = (
  data: CovidInfo[],
  sortBy: string,
  order: Many<boolean | "asc" | "desc"> | undefined
): CovidInfo[] => {
  const sortedData: CovidInfo[] = _.orderBy(data, sortBy, order);
  return sortedData;
};
