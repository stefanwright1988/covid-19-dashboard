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
import "./HistoryCardStyled.css";
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
  padding-top: 10px;
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
  } = useContext(AppContext);
  return (
    <StyledHistoryCardContainer>
      {loading || props.isBlank ? (
        <Loader />
      ) : (
        <StyledHistoryCardInner>
          <StyledHistoryCardTopLine type={toSentenceCase(activeCaseType)}>
            <ResponsiveContainer>
              <AreaChart data={globalCovidHistory[activeCaseType]}>
                <XAxis dataKey="date" stroke="#d5d5d9" />
                <YAxis
                  type="number"
                  domain={[
                    globalCovidHistory[activeCaseType][0].reports,
                    "auto",
                  ]}
                  tickFormatter={(tick: number) => {
                    return abbreviateNumber(tick, 2);
                  }}
                  stroke="#d5d5d9"
                />
                <CartesianGrid />
                <Area type="monotone" dataKey="reports" stroke="#d5d5d9" />
              </AreaChart>
            </ResponsiveContainer>
          </StyledHistoryCardTopLine>
          <StyledHistoryCardMidLine>
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                changeOrder(
                  "reverse",
                  updateActiveCaseType,
                  updateNextCaseType,
                  updatePreviousCaseType
                );
              }}
            >
              Back
            </button>
            <div
              className="all-slides"
              style={{ display: "flex", margin: "0 auto" }}
            >
              <div
                className="single-slide"
                data-order="0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
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
                }}
              >
                <StyledHistoryCardMidLineTitle>
                  Recovered
                </StyledHistoryCardMidLineTitle>
                <StyledHistoryCardMidLineSubTitle>
                  {abbreviateNumber(
                    difference(
                      globalCovidHistory["recovered"][0].reports ?? 0,
                      globalCovidHistory["recovered"][
                        globalCovidHistory["recovered"].length - 1
                      ].reports
                    ),
                    3
                  )}
                </StyledHistoryCardMidLineSubTitle>
              </div>
            </div>
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                changeOrder(
                  "forward",
                  updateActiveCaseType,
                  updateNextCaseType,
                  updatePreviousCaseType
                );
              }}
            >
              Forward
            </button>
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
