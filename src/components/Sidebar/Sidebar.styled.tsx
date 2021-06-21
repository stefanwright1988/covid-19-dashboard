import styled from "styled-components";
import { device } from "../../vars";

const SidebarContainer = styled.div`
  display: none;
  flex-direction: column;
  height: 100vh;
  min-width: 270px;
  background-color: rgba(37, 37, 41, 1);
  color: rgba(255, 255, 255, 1);
  font-family: "Open Sans", sans-serif;
  @media ${device.laptop} {
    grid-area: sidebar;
    display: flex;
  }
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
