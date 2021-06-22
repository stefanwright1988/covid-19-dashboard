import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  top: 0;
  left: auto;
  right: 0;
  color: #555555;
  width: 100%;
  border: 0;
  display: block;
  padding: 10px 0;
  z-index: 1029;
  position: absolute;
  box-shadow: none;
  min-height: 50px;
  transition: all 150ms ease 0s;
  padding-top: 10px;
  border-bottom: 0;
  border-radius: 3px;
  margin-bottom: 0;
  background-color: transparent;
`;

export default StyledHeader;
