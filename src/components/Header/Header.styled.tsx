import styled from "styled-components";

const StyledHeader = styled.header`
  flex-shrink: 0;
  flex-direction: column;
  top: 0;
  left: auto;
  right: 0;
  color: #d5d5d9;
  width: 100%;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0;
  z-index: 1029;
  position: absolute;
  box-shadow: none;
  min-height: 50px;
  transition: all 150ms ease 0s;
  padding-top: 10px;
  margin-bottom: 0;
  background-color: #000119;
`;

export default StyledHeader;
