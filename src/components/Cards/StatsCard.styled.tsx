import { Component } from "react";
import styled from "styled-components";

const StyledStatsCardContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  min-width: 0;
  word-wrap: break-word;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const StyledStatsCardInner = styled.div`
  border-radius: 0.75rem;
  margin: 0 0 1rem;
  padding: 2rem;
  background: linear-gradient(to right, #d763cd, #8f44fd);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
`;

class StyledStatsCard extends Component<{ title: string }> {
  render() {
    return (
      <StyledStatsCardContainer>
        <StyledStatsCardInner>
          <p>{this.props.title}</p>
        </StyledStatsCardInner>
      </StyledStatsCardContainer>
    );
  }
}
export default StyledStatsCard;
