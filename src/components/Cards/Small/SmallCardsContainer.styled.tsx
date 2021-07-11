import styled from "styled-components";

const SmallStyledCardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 50%;
  margin: 10px 12.5px !important;
  padding: 0 15px;
  height: fit-content;
  box-shadow: 5px 5px 15px 5px #9f9f9f;
  border-radius: 50px;
  > h1 {
    text-align: center;
    width: 100%;
  }
`;

export default SmallStyledCardsContainer;
