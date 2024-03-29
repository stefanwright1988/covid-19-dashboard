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
import {
  abbreviateNumber,
  difference,
  roundDown,
  roundUp,
} from "../../../helpers/number";
import Loader from "../../Loader/Loader";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";
import { toSentenceCase } from "../../../helpers/strings";
import "./HistoryCardStyled.css";
import _ from "lodash";
import { RightArrowCircle } from "@styled-icons/boxicons-regular";
import { LeftArrowCircle } from "@styled-icons/boxicons-regular";
interface StyledHistoryCardTopLineProps {
  type?: string;
}
const handleStyledHistoryCardTopLineBackgroundColor = (type?: string) => {
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
const StyledHistoryCardContainer = styled.div`
  font-weight: 300;
  line-height: 1.5em;

  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  padding: 0 15px !important;
`;
const StyledHistoryCardInner = styled.div`
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #80808c;
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: column;
`;
const StyledHistoryCardTopLine = styled.div<StyledHistoryCardTopLineProps>`
  margin: 0 15px;
  position: relative;
  background: linear-gradient(
    60deg,
    ${({ type }) => handleStyledHistoryCardTopLineBackgroundColor(type)}
  );
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(76, 175, 80, 0.4);
  padding: 15px;
  margin-top: -20px;
  border-radius: 3px;
  height: 200px;
`;
const StyledHistoryCardMidLine = styled.div`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.875rem;
  word-wrap: break-word;

  padding: 0.9375rem 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  grid-auto-columns: 33%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;
const StyledHistoryCardMidLineTitle = styled.p`
  font-weight: 300;
  line-height: 1.5em;
  word-wrap: break-word;
  text-align: right;

  margin: 0;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
`;
const StyledHistoryCardMidLineSubTitle = styled.h3`
  word-wrap: break-word;
  text-align: right;

  font-size: 1.825em;
  line-height: 1.5em;
  min-height: auto;

  font-weight: 300;
  text-decoration: none;
  margin: 0 !important;
`;
const StyledHistoryCardBottomLine = styled.div`
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
const StyledHistoryCardBottomLineContent = styled.div`
  font-weight: 300;
  word-wrap: break-word;

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

const StyledHistoryCardArrow = styled.span`
  color: #d5d5d9;

  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  text-transform: none;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;

  flex-shrink: 0;
  user-select: none;
  width: 56px;
  height: 56px;
  overflow: 90%;
  font-size: 36px;
  text-align: center;
  margin-bottom: 1px;
`;

const changeOrder = (
  direction: any,
  updateActiveCaseType: any,
  updateNextCaseType: any,
  updatePreviousCaseType: any
) => {
  const allSlides = document.querySelectorAll(".single-slide");
  const previous = "0";
  const current = "1";
  const next = "2";

  for (const slide of allSlides as any) {
    switch (slide.getAttribute("data-order")) {
      case current:
        slide.setAttribute(
          "data-order",
          direction === "forward" ? previous : next
        );
        break;
      case next:
        slide.setAttribute(
          "data-order",
          direction === "forward" ? current : previous
        );
        break;
      case previous:
        slide.setAttribute(
          "data-order",
          direction === "forward" ? next : current
        );
        break;
    }
  }
  switch (
    document
      .querySelectorAll(`[data-order="1"]`)[0]
      .querySelector("p")
      ?.innerText.toLowerCase()
  ) {
    case "cases":
      updateNextCaseType("deaths");
      updateActiveCaseType("cases");
      updatePreviousCaseType("recovered");
      break;
    case "deaths":
      updateNextCaseType("recovered");
      updateActiveCaseType("deaths");
      updatePreviousCaseType("cases");
      break;
    case "recovered":
      updateNextCaseType("cases");
      updateActiveCaseType("recovered");
      updatePreviousCaseType("deaths");
      break;
    default:
      break;
  }
};
interface StyledHistoryCardProps {
  isBlank: boolean;
}
const StyledHistoryCard = (props: StyledHistoryCardProps) => {
  const {
    loading,
    globalCovidHistory,
    daysToUse,
    activeCaseType,
    updateActiveCaseType,
    updateNextCaseType,
    updatePreviousCaseType,
    globalCovidHistoryError,
    globalCovidHistoryErrorText,
  } = useContext(AppContext);
  const chartYMin = roundDown(
    globalCovidHistory[activeCaseType][0]?.reports || 0
  );
  const chartYMax = roundUp(
    globalCovidHistory[activeCaseType][
      globalCovidHistory[activeCaseType].length - 1
    ]?.reports || 0
  );
  const chartXMin = Number(globalCovidHistory[activeCaseType][0]?.date) || 0;
  const chartXMax =
    Number(
      globalCovidHistory[activeCaseType][
        globalCovidHistory[activeCaseType].length - 1
      ]?.date
    ) || 0;
  return (
    <StyledHistoryCardContainer>
      {globalCovidHistoryError ? (
        <h1>{globalCovidHistoryErrorText}</h1>
      ) : loading || props.isBlank ? (
        <Loader />
      ) : (
        <StyledHistoryCardInner>
          <StyledHistoryCardTopLine type={toSentenceCase(activeCaseType)}>
            <ResponsiveContainer>
              <AreaChart data={globalCovidHistory[activeCaseType]}>
                <XAxis
                  dataKey="date"
                  stroke="#d5d5d9"
                  type="number"
                  tickCount={daysToUse.value}
                  domain={[chartXMin, chartXMax]}
                  interval={0}
                  ticks={_.range(
                    chartXMin,
                    chartXMax,
                    (chartXMax - chartXMin) / 4
                  ).concat(chartXMax)}
                  tickFormatter={(tick: string) => {
                    return new Date(Number(tick)).toLocaleDateString(
                      navigator.language
                    );
                  }}
                />
                <YAxis
                  type="number"
                  domain={[chartYMin, chartYMax]}
                  tickFormatter={(tick: number) => {
                    return abbreviateNumber(tick, 2);
                  }}
                  tickCount={5}
                  stroke="#d5d5d9"
                  ticks={_.range(
                    chartYMin,
                    chartYMax,
                    (chartYMax - chartYMin) / 4
                  ).concat(chartYMax)}
                />
                <CartesianGrid />
                <Area type="monotone" dataKey="reports" stroke="#d5d5d9" />
              </AreaChart>
            </ResponsiveContainer>
          </StyledHistoryCardTopLine>
          <StyledHistoryCardMidLine>
            <StyledHistoryCardArrow
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                changeOrder(
                  "reverse",
                  updateActiveCaseType,
                  updateNextCaseType,
                  updatePreviousCaseType
                );
              }}
            >
              <LeftArrowCircle />
            </StyledHistoryCardArrow>
            <div
              className="all-slides"
              style={{
                display: "flex",
                margin: "0 auto",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                className="single-slide"
                data-order="0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "25%",
                }}
              >
                <StyledHistoryCardMidLineTitle>
                  Deaths
                </StyledHistoryCardMidLineTitle>
                <StyledHistoryCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["deaths"][0].reports ?? 0,
                      globalCovidHistory["deaths"][
                        globalCovidHistory["deaths"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledHistoryCardMidLineSubTitle>
              </div>
              <div
                className="single-slide"
                data-order="1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "25%",
                }}
              >
                <StyledHistoryCardMidLineTitle>
                  Cases
                </StyledHistoryCardMidLineTitle>
                <StyledHistoryCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["cases"][0].reports ?? 0,
                      globalCovidHistory["cases"][
                        globalCovidHistory["cases"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledHistoryCardMidLineSubTitle>
              </div>
              <div
                className="single-slide"
                data-order="2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "25%",
                }}
              >
                <StyledHistoryCardMidLineTitle>
                  Recovered
                </StyledHistoryCardMidLineTitle>
                <StyledHistoryCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["recovered"][
                        globalCovidHistory["recovered"].length - 1
                      ].reports,
                      globalCovidHistory["recovered"][0].reports ?? 0
                    ),
                    3
                  )}
                </StyledHistoryCardMidLineSubTitle>
              </div>
            </div>
            <StyledHistoryCardArrow
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                changeOrder(
                  "forward",
                  updateActiveCaseType,
                  updateNextCaseType,
                  updatePreviousCaseType
                );
              }}
            >
              <RightArrowCircle />
            </StyledHistoryCardArrow>
          </StyledHistoryCardMidLine>
          <StyledHistoryCardBottomLine>
            <StyledHistoryCardBottomLineContent>
              <Calendar /> {daysToUse.label}
            </StyledHistoryCardBottomLineContent>
          </StyledHistoryCardBottomLine>
        </StyledHistoryCardInner>
      )}
    </StyledHistoryCardContainer>
  );
};
export default StyledHistoryCard;
