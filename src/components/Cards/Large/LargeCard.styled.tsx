import { Component } from "react";
import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { Sick } from "@styled-icons/material-rounded/Sick";
import { SkullCrossbones } from "@styled-icons/fa-solid/SkullCrossbones";
import { Smile } from "@styled-icons/fa-regular/Smile";

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

const StyledLargeCardTopLine = styled.div`
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
  margin-top: 20px;
`;

interface StyledLargeCardIconContainerProps {
  type?: string;
}

const handleStyledLargeCardIconContainerBackgroundColor = (type?: string) => {
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
const StyledLargeCardIconContainer = styled.div<StyledLargeCardIconContainerProps>`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.875rem;
  word-wrap: break-word;
  color: #fff;
  text-align: right;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(
    60deg,
    ${({ type }) => handleStyledLargeCardIconContainerBackgroundColor(type)}
  );
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(244, 67, 54, 0.4);
  float: left;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  border-radius: 3px;
`;

const StyledLargeCardIconSpan = styled.span`
  color: #fff;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  flex-shrink: 0;
  user-select: none;
  width: 56px;
  height: 56px;
  overflow: unset;
  font-size: 36px;
  text-align: center;
  line-height: 56px;
  margin-bottom: 1px;
`;

const StyledLargeCardTopLineTitle = styled.p`
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
const StyledLargeCardTopLineSubTitle = styled.h3`
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
}> {
  render() {
    let icon;
    switch (this.props.type) {
      case "Cases":
        icon = <Sick />;
        break;
      case "Deaths":
        icon = <SkullCrossbones />;
        break;
      case "Recovered":
        icon = <Smile />;
        break;
      case "Active":
        icon = <Sick />;
        break;
      default:
        break;
    }
    return (
      <StyledLargeCardContainer>
        <StyledLargeCardInner>
          <StyledLargeCardTopLine>
            <StyledLargeCardIconContainer type={this.props.type}>
              <StyledLargeCardIconSpan>{icon}</StyledLargeCardIconSpan>
            </StyledLargeCardIconContainer>
            <StyledLargeCardTopLineTitle>
              {this.props.type}
            </StyledLargeCardTopLineTitle>
            <StyledLargeCardTopLineSubTitle>
              {this.props.subtitle}
            </StyledLargeCardTopLineSubTitle>
          </StyledLargeCardTopLine>
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
