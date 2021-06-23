import { Component } from "react";
import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { Sick } from "@styled-icons/material-rounded/Sick";
import { SkullCrossbones } from "@styled-icons/fa-solid/SkullCrossbones";
import { Smile } from "@styled-icons/fa-regular/Smile";

const StyledSmallCardContainer = styled.div`
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
  max-width: 25%;
  flex-basis: 25%;
  padding: 0 15px !important;
`;

const StyledSmallCardInner = styled.div`
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

const StyledSmallCardTopLine = styled.div`
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
  padding: 0;
  position: relative;
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  background: transparent;
  box-shadow: none;
  text-align: right;
`;

const StyledSmallCardBottomLine = styled.div`
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

const StyledSmallCardIconContainer = styled.div`
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
  background: linear-gradient(60deg, #ef5350, #e53935);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(244, 67, 54, 0.4);
  float: left;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  border-radius: 3px;
  background-color: #999;
`;

const StyledSmallCardIconSpan = styled.span`
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

const StyledSmallCardTopLineTitle = styled.p`
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
const StyledSmallCardTopLineSubTitle = styled.h3`
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
const StyledSmallCardBottomLineContent = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  color: #999;
  display: inline-flex;
  font-size: 12px;
  line-height: 22px;
`;

class StyledSmallCard extends Component<{
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
      default:
        break;
    }
    return (
      <StyledSmallCardContainer>
        <StyledSmallCardInner>
          <StyledSmallCardTopLine>
            <StyledSmallCardIconContainer>
              <StyledSmallCardIconSpan>{icon}</StyledSmallCardIconSpan>
            </StyledSmallCardIconContainer>
            <StyledSmallCardTopLineTitle>
              {this.props.type}
            </StyledSmallCardTopLineTitle>
            <StyledSmallCardTopLineSubTitle>
              {this.props.subtitle}
            </StyledSmallCardTopLineSubTitle>
          </StyledSmallCardTopLine>
          <StyledSmallCardBottomLine>
            <StyledSmallCardBottomLineContent>
              <Calendar /> Last 24 Hours
            </StyledSmallCardBottomLineContent>
          </StyledSmallCardBottomLine>
        </StyledSmallCardInner>
      </StyledSmallCardContainer>
    );
  }
}
export default StyledSmallCard;
