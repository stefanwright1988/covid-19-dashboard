import styled from "styled-components";

const LargeStyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: nowrap;
  align-content: space-around;
  max-width: 50%;
  height: 100%;
  margin: 10px 12.5px !important;
  padding: 0 15px;
  box-shadow: 5px 5px 15px 5px #9f9f9f;
  border-radius: 50px;
  > h1 {
    text-align: center;
    width: 100%;
  }
`;

export default LargeStyledCardsContainer;
