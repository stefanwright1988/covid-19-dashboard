import { LineChart, Line } from "recharts";

interface HistoryCardProps {
  cardData: any;
}

const renderLineChart = (props: HistoryCardProps) => {
  <LineChart width={400} height={400} data={props.cardData}>
    <Line type="monotone" dataKey="reports" stroke="#8884d8" />
  </LineChart>;
};

export default renderLineChart;
