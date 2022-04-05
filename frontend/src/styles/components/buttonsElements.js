import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LightButton = styled(NavLink)`
  color: #ffd0d0;
  padding: 0.8rem;
  border: 2px solid #ffd0d0;
  border-radius: 3px;
  font-size: calc(0.7rem + 1vh);
  font-weight: 600;
  background-color: transparent;
  letter-spacing: 0.15rem;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  box-shadow: -2px -2px #b34949;
  text-decoration: none;
  &:hover {
    background-color: #ffd0d0;
    color: #ff8181;
  }
`;

export const DarkButton = styled(NavLink)`
  color: #b34949;
  padding: 0.8rem;
  border: 2px solid #b34949;
  border-radius: 3px;
  font-size: calc(0.7rem + 1vh);
  font-weight: 600;
  background-color: transparent;
  letter-spacing: 0.15rem;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  box-shadow: -2px -2px #ffd0d0;
  text-decoration: none;
  &:hover {
    background-color: #b34949;
    color: #ff8181;
  }
`;
