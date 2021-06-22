import styled from "styled-components";
import { device } from "../../vars";

const SidebarContainer = styled.div`
  /* display: none;
  flex-direction: column;
  height: 100vh;
  min-width: 270px;
  background-color: rgba(37, 37, 41, 1);
  color: rgba(255, 255, 255, 1);
  font-family: "Open Sans", sans-serif;
  @media ${device.laptop} {
    grid-area: sidebar;
    display: flex;
  } */
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #121;
  flex: 1 0 auto;
  display: flex;
  outline: 0;
  overflow-y: auto;
  flex-direction: column;
  right: auto;
  top: 0;
  left: 0;
  border: none;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  width: 260px;
  height: 100%;
  position: fixed;
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
  padding: 0px 30px;
`;

const SidebarMenuItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 rgba(255, 255, 255, 1);
    cursor: pointer;
  }
`;

const SidebarIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const SidebarMenuItemLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px;
`;

export {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemLabel,
  SidebarIcon,
};
