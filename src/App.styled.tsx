import styled from "styled-components";
import { device } from "./vars";

const StyledApp = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    "head"
    "main";
  @media ${device.laptop} {
    grid-template-columns: 20% 1fr;
    grid-template-rows: 72px 1fr;
    grid-template-areas:
      "sidebar head head head"
      "sidebar main main main"
      "sidebar main main main"
      "sidebar main main main";
  }
`;

export default StyledApp;
