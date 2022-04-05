import styled from "styled-components";
import { BsCupStraw } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.nav`
  background-color: ${({ scrollnav }) => (scrollnav ? "#FF81819C" : "#ffd0d0")};
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  transition: 0.3s ease-in-out;
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

export const HeaderLogo = styled.div`
  p {
    font-size: calc(1.2rem + 1vh);
  }
`;

export const Logo = styled(BsCupStraw)``;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  font-size: calc(0.8rem + 1vh);
  color: ${({ scrollnav }) => (scrollnav ? "#FFD0D0" : "#ff8181")};
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: 0.3s ease-in-out;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeaderItems = styled.li`
  list-style: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 50px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #ffc7c7;
    p {
      color: #ff8181;
    }
  }
`;

export const SideBarBurger = styled(FaBars)`
  display: none;
  color: ${({ scrollnav }) => (scrollnav ? "#FFD0D0" : "#ff8181")};
  cursor: pointer;
  font-size: calc(1rem + 1vh);
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;
