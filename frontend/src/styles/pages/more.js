import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";

export const Loading = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const MoreContainer = styled.div`
  display: block;
  margin: auto;
  max-width: 80vw;
  min-width: 70vw;
  h4 {
    color: #b34949;
    font-size: calc(1.3rem + 1vh);
    margin: 1rem 0 1rem 0;
  }
  p {
    margin-left: 1rem;
    background-color: #ff9393;
    color: #3c3434;
    font-weight: 400;
    letter-spacing: 0.3px;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: -2px -2px #b34949;
  }
  h5 {
    float: right;
    overflow: auto;
    color: #807070;
  }
`;

export const BackBtn = styled(MdArrowBack)`
  color: #b34949;
  font-size: calc(1.3rem + 1vh);
  margin-bottom: -1rem;
  cursor: pointer;
`;

export const MoreTitle = styled.h3`
  text-align: center;
  font-size: calc(2rem + 1vh);
  color: #b34949;
`;

export const MoreTools = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media screen and (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const MoreUpdate = styled.button`
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
  box-shadow: -2px -2px #ff9393;
  text-decoration: none;
  &:hover {
    background-color: #b34949;
    color: #ff8181;
  }
`;

export const MoreDelete = styled.button`
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
  box-shadow: -2px -2px #ff9393;
  text-decoration: none;
  &:hover {
    background-color: #b34949;
    color: #ff8181;
  }
`;
