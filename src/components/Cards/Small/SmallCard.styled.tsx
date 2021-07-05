import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { Viruses } from "@styled-icons/fa-solid";
import { SkullCrossbones } from "@styled-icons/fa-solid/SkullCrossbones";
import { Smile } from "@styled-icons/fa-solid/Smile";
import { HeadSideMask } from "@styled-icons/fa-solid";
import Loader from "../../Loader/Loader";

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

interface StyledSmallCardIconContainerProps {
  type?: string;
}

const handleStyledSmallCardIconContainerBackgroundColor = (type?: string) => {
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
const StyledSmallCardIconContainer = styled.div<StyledSmallCardIconContainerProps>`
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
    ${({ type }) => handleStyledSmallCardIconContainerBackgroundColor(type)}
  );
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(244, 67, 54, 0.4);
  float: left;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  border-radius: 3px;
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
  line-height: 18px;
  & > svg {
    width: 16px;
    height: 16px;
    position: relative;
    margin-left: 3px;
    margin-right: 3px;
  }
`;

interface StyledSmallCardProps {
  subtitle?: string;
  type?: string;
  updated?: string;
  isBlank?: boolean;
}

const StyledSmallCard = (props: StyledSmallCardProps) => {
  let icon;
  switch (props.type) {
    case "Cases":
      icon = <Viruses />;
      break;
    case "Deaths":
      icon = <SkullCrossbones />;
      break;
    case "Recovered":
      icon = <Smile />;
      break;
    case "Active":
      icon = <HeadSideMask />;
      break;
    default:
      break;
  }
  return (
    <StyledSmallCardContainer>
      <StyledSmallCardInner>
        <StyledSmallCardTopLine>
          <StyledSmallCardIconContainer type={props.type}>
            <StyledSmallCardIconSpan>{icon}</StyledSmallCardIconSpan>
          </StyledSmallCardIconContainer>
          <StyledSmallCardTopLineTitle>
            {props.type} to date
          </StyledSmallCardTopLineTitle>
          {props.isBlank ? (
            <Loader />
          ) : (
            <StyledSmallCardTopLineSubTitle>
              {props.subtitle}
            </StyledSmallCardTopLineSubTitle>
          )}
        </StyledSmallCardTopLine>
        <StyledSmallCardBottomLine>
          <StyledSmallCardBottomLineContent>
            <Calendar /> Updated: {props.updated}
          </StyledSmallCardBottomLineContent>
        </StyledSmallCardBottomLine>
      </StyledSmallCardInner>
    </StyledSmallCardContainer>
  );
};
export default StyledSmallCard;
