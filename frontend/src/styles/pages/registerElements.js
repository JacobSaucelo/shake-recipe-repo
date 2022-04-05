import styled from "styled-components";
import { BsCupStraw } from "react-icons/bs";
import coverRegister from "../../media/images/register/register.webp";

export const RegisterContainer = styled.div`
  padding: 1rem 4rem 1rem 4rem;
  @media screen and (max-width: 700px) {
    padding: 1rem 1rem 1rem 1rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 80vh;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  background-color: #ff9393;
  border-radius: 25px;
  overflow: hidden;
`;

export const FormSide = styled.div`
  width: 50%;
  text-align: center;
`;

export const RegisterHeader = styled.div`
  color: #b34949;
  padding: 0.5rem;
  font-weight: 500;
  h3 {
    color: #b35656;
    font-size: calc(1.5rem + 1vh);
  }
  p {
    background-color: #ffd0d0;
    font-size: calc(0.6rem + 1vh);
    margin: 0.5rem 5rem 0 5rem;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    p {
      margin: 0;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #ffd0d0;
  box-shadow: -3px -3px #b34949;
  color: #b34949;

  &:hover {
    color: #807070;
    box-shadow: -3px -3px #807070;
  }
`;

export const RegisterInput = styled.input`
  margin-left: 0.5rem;
  background-color: transparent;
  color: #b34949;
  font-size: calc(0.6rem + 1vh);
  font-weight: 500;
  border: none;
  outline: none;
`;

export const RegisterBtn = styled.button`
  background-color: transparent;
  border: 2px solid #ffd0d0;
  border-radius: 10px;
  font-size: calc(0.7rem + 1vh);
  font-weight: 600;
  color: #ffd0d0;
  padding: 0.5rem;
  margin: 0.5rem 0 1rem 0;
  box-shadow: -3px -3px #b34949;

  &:hover {
    background-color: #b34949;
  }
`;

export const ErrorMessage = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  color: red;
  margin: 0.5rem;
  transition: 0.3s ease-in;
`;

export const RegisterInfo = styled.div`
  background: linear-gradient(
      45deg,
      rgba(168, 14, 14, 0.8),
      rgba(168, 14, 14, 0.6)
    ),
    url(${coverRegister}) no-repeat center center / cover;
  overflow: hidden;
  width: 50%;
  min-height: 80vh;
  text-align: center;
  display: flex;
  visibility: visible;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffd0d0;
  font-size: calc(1rem + 1vh);
  padding: 0 3rem 0 3rem;

  @media screen and (max-width: 700px) {
    display: none;
    visibility: hidden;
  }
`;
export const Logo = styled(BsCupStraw)``;
