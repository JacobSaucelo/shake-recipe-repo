import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCupStraw } from "react-icons/bs";
import coverLogin from "../../media/images/login/login.jpg";

export const LoginContainer = styled.div`
  padding: 1rem 5rem 1rem 5rem;
  @media screen and (max-width: 700px) {
    padding: 1rem 1rem 1rem 1rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 80vh;
  flex-direction: row;
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

export const LoginHeader = styled.div`
  color: #b34949;
  padding: 1rem;
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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginField = styled.div`
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

export const LoginInput = styled.input`
  margin-left: 0.5rem;
  background-color: transparent;
  color: #b34949;
  font-size: calc(0.6rem + 1vh);
  font-weight: 500;
  border: none;
  outline: none;
`;

export const LoginBtn = styled.button`
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
`;

export const LoginRegister = styled.div`
  color: #b35656;
`;

export const RegisterLink = styled(NavLink)`
  font-size: calc(0.6rem + 1vh);
  font-weight: 600;
  color: #fff;
`;

export const LoginInfo = styled.div`
  background: linear-gradient(
      45deg,
      rgba(168, 14, 14, 0.6),
      rgba(168, 14, 14, 0.5)
    ),
    url(${coverLogin}) no-repeat center center / cover;
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
