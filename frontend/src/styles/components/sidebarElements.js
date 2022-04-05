import styled from "styled-components";
import { BsCupStraw } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 320px;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ff8181;
  transition: 0.3s ease;
  transform: translate(
    ${({ isOpen }) => (isOpen ? "0px, 0px" : "1000px, 0px")}
  );

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const SidebarClose = styled(FaTimes)`
  top: 0;
  left: 0;
  position: absolute;
  font-size: calc(1.5rem + 1vh);
  color: #b34949;
  margin: 0.5rem;
  cursor: pointer;
`;

export const SidebarLogo = styled.div`
  font-size: calc(1rem + 1vh);
  h3 {
    color: #b34949;
    text-decoration: none;
  }
  border-bottom: 3px solid #ff9c9c;
  margin: 1rem;
`;

export const Logo = styled(BsCupStraw)`
  font-size: calc(1.6rem + 1vh);
  color: #b34949;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.li`
  list-style: none;
  font-size: calc(0.8rem + 1vh);
  margin: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 50px;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #ff9c9c;
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #b34949;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #b35b5b;
  }
`;
