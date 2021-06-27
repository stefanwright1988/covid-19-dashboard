import { Component } from "react";
import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { abbreviateNumber } from "../../../helpers/number";
interface StyledLargeCardTopLineProps {
  type?: string;
}

const handleStyledLargeCardTopLineBackgroundColor = (type?: string) => {
  switch (type) {
    case "Cases":
      return "#FF0000,	#8B0000";
    case "Deaths":
      return "#FF0000,	#8B0000";
    case "Recovered":
      return "#008000,#006400";
    case "Active":
      return "#FFA500,#FF8C00";
    default:
      return "#03a9f3";
  }
};
const StyledLargeCardContainer = styled.div`
  color: #3c4858;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
  padding: 0 15px !important;
`;

const StyledLargeCardInner = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const StyledLargeCardTopLine = styled.div<StyledLargeCardTopLineProps>`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.875rem;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  z-index: 3 !important;
  border-bottom: none;
  color: #fff;
  margin: 0 15px;
  position: relative;
  background: linear-gradient(
    60deg,
    ${({ type }) => handleStyledLargeCardTopLineBackgroundColor(type)}
  );
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(76, 175, 80, 0.4);
  padding: 15px;
  margin-top: -20px;
  border-radius: 3px;
  height: 200px;
`;

const StyledLargeCardMidLine = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  flex: 1 1 auto;
  padding: 0.9375rem 20px;
  position: relative;
  -webkit-box-flex: 1;
`;

const StyledLargeCardMidLineTitle = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  word-wrap: break-word;
  text-align: right;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  color: #999;
  margin: 0;
  font-size: 14px;
  margin-top: 0;
  padding-top: 10px;
  margin-bottom: 0;
`;
const StyledLargeCardMidLineSubTitle = styled.h3`
  word-wrap: break-word;
  text-align: right;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  font-size: 1.825em;
  line-height: 1.5em;
  color: #3c4858;
  min-height: auto;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  text-decoration: none;
  margin: 0 !important;
`;

const StyledLargeCardBottomLine = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  border: 0;
  margin: 0 15px 10px;
  display: flex;
  padding: 0;
  align-items: center;
  padding-top: 10px;
  border-radius: 0;
  justify-content: space-between;
  background-color: transparent;
  border-top: 1px solid #eee;
`;

const StyledLargeCardBottomLineContent = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  color: #999;
  display: inline-flex;
  font-size: 12px;
  line-height: 18px;
  & > svg {
    width: 16px;
    height: 16px;
    position: relative;
    margin-left: 3px;
    margin-right: 3px;
  }
`;

class StyledLargeCard extends Component<{
  subtitle?: string;
  type?: string;
  cardData: any;
}> {
  render() {
    return (
      <StyledLargeCardContainer>
        <StyledLargeCardInner>
          <StyledLargeCardTopLine type={this.props.type}>
            <ResponsiveContainer>
              <LineChart data={this.props.cardData}>
                <XAxis dataKey="date" stroke="#fff" />
                <YAxis
                  tick={{ fontSize: 14, width: 250 }}
                  type="number"
                  domain={[this.props.cardData[0].reports, "auto"]}
                  tickFormatter={(tick) => {
                    return abbreviateNumber(tick, 2);
                  }}
                  stroke="#fff"
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="reports" stroke="#fff" />
              </LineChart>
            </ResponsiveContainer>
          </StyledLargeCardTopLine>
          <StyledLargeCardMidLine>
            <StyledLargeCardMidLineTitle>
              {this.props.type}
            </StyledLargeCardMidLineTitle>
            <StyledLargeCardMidLineSubTitle>
              {this.props.subtitle}
            </StyledLargeCardMidLineSubTitle>
          </StyledLargeCardMidLine>
          <StyledLargeCardBottomLine>
            <StyledLargeCardBottomLineContent>
              <Calendar /> Last 24 Hours
            </StyledLargeCardBottomLineContent>
          </StyledLargeCardBottomLine>
        </StyledLargeCardInner>
      </StyledLargeCardContainer>
    );
  }
}
export default StyledLargeCard;
