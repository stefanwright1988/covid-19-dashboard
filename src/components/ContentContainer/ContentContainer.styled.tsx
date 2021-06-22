import styled from "styled-components";

const StyledContentContainer = styled.div`
  color: #3c4858;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  overflow: hidden !important;
  overflow-anchor: none;
  touch-action: auto;
  float: right;
  position: relative;
  max-height: 100%;
  transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
  width: calc(100% - 260px);
`;

export default StyledContentContainer;
