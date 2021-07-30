import styled from "styled-components";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
} from "recharts";
import { abbreviateNumber, difference } from "../../../helpers/number";
import Loader from "../../Loader/Loader";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";
import { toSentenceCase } from "../../../helpers/strings";
import { CovidHistory } from "../../../interfaces/covidInterface";
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
  flex-grow: 1;
  flex-basis: 50%;
  padding: 0 15px !important;
`;
const StyledLargeCardInner = styled.div`
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
  padding: 0.9375rem 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  grid-auto-columns: 33%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
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

const changeOrder = (direction: any) => {
  const allSlides = document.querySelectorAll(".single-slide");
  const previous = "0";
  const current = "1";
  const next = "2";

  for (const slide of allSlides as any) {
    const order = slide.getAttribute("data-order");

    switch (order) {
      case current:
        slide.setAttribute(
          "data-order",
          direction === "forward" ? next : previous
        );
        break;
      case next:
        slide.setAttribute("data-order", "forward" ? previous : current);
        break;
      case previous:
        slide.setAttribute(
          "data-order",
          direction === "forward" ? current : next
        );
        break;
    }
  }
};
interface StyledLargeCardProps {
  currentDetails?: string;
  currentLabel?: string;
  cardData: any;
  daysToUse: number;
  isBlank?: boolean;
  prevButton: (currentIndex: number) => void;
  prevDetails: string;
  nextButton: (currentIndex: number) => void;
  nextDetails: string;
  currentIndex: number;
  nextLabel: string;
  prevLabel: string;
  nextIndex: number;
  prevIndex: number;
}
const StyledLargeCard = (props: StyledLargeCardProps) => {
  const { loading, globalCovidHistory, daysToUse } = useContext(AppContext);
  return (
    <StyledLargeCardContainer>
      {loading || props.isBlank ? (
        <Loader />
      ) : (
        <StyledLargeCardInner>
          <StyledLargeCardTopLine type={props.currentLabel}>
            <ResponsiveContainer>
              <AreaChart data={globalCovidHistory["cases"]}>
                <XAxis dataKey="date" stroke="#fff" />
                <YAxis
                  type="number"
                  domain={[globalCovidHistory["cases"][0].reports, "auto"]}
                  tickFormatter={(tick: number) => {
                    return abbreviateNumber(tick, 2);
                  }}
                  stroke="#fff"
                />
                <CartesianGrid />
                <Area type="monotone" dataKey="reports" stroke="#fff" />
              </AreaChart>
            </ResponsiveContainer>
          </StyledLargeCardTopLine>
          <StyledLargeCardMidLine>
            {/*           <button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              props.prevButton(props.currentIndex);
              changeOrder("reverse");
            }}
          >
            Back
          </button> */}
            <div
              className="all-slides"
              style={{ display: "flex", margin: "0 auto" }}
            >
              <div
                className="single-slide"
                data-order="1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "absolute",
                  transition: "2s ease",
                }}
              >
                <StyledLargeCardMidLineTitle>
                  {props.prevLabel}
                </StyledLargeCardMidLineTitle>
                <StyledLargeCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["recovered"][0].reports ?? 0,
                      globalCovidHistory["recovered"][
                        globalCovidHistory["recovered"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledLargeCardMidLineSubTitle>
              </div>
              <div
                className="single-slide"
                data-order="0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "absolute",
                  transition: "2s ease",
                }}
              >
                <StyledLargeCardMidLineTitle>Cases</StyledLargeCardMidLineTitle>
                <StyledLargeCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["cases"][0].reports ?? 0,
                      globalCovidHistory["cases"][
                        globalCovidHistory["cases"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledLargeCardMidLineSubTitle>
              </div>
              <div
                className="single-slide"
                data-order="2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "absolute",
                  transition: "2s ease",
                }}
              >
                <StyledLargeCardMidLineTitle>
                  {props.nextLabel}
                </StyledLargeCardMidLineTitle>
                <StyledLargeCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["deaths"][0].reports ?? 0,
                      globalCovidHistory["deaths"][
                        globalCovidHistory["deaths"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledLargeCardMidLineSubTitle>
              </div>
            </div>
            {/* <button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              props.nextButton(props.currentIndex);
              changeOrder("forward");
            }}
          >
            Forward
          </button> */}
          </StyledLargeCardMidLine>
          <StyledLargeCardBottomLine>
            <StyledLargeCardBottomLineContent>
              <Calendar /> Last {props.daysToUse} days
            </StyledLargeCardBottomLineContent>
          </StyledLargeCardBottomLine>
        </StyledLargeCardInner>
      )}
    </StyledLargeCardContainer>
  );
};
export default StyledLargeCard;
