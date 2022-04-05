import styled from "styled-components";

export const CreateContainer = styled.div`
  padding: 1rem;
  transition: all 0.5s ease;
  position: fixed;
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-color: ${({ isActive }) =>
    isActive ? "rgba(0, 0, 0, 0.6)" : "transparent"};
  top: ${({ isActive }) => (isActive ? "0" : "-1000px")};
  z-index: ${({ isActive }) => (isActive ? "10" : "-10")};
  bottom: 0;
  left: 0;
  right: 0;
`;

//todo      CONTINUE HERE

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #b34949;
  padding: 1rem;
  border: 3px solid #ff8181;
  border-radius: 10px;
  max-width: 600px;
  margin: 5% auto auto auto;

  h1 {
    color: #ffd0d0;
    text-align: center;
  }
`;

export const CreateLabel = styled.label`
  color: #ffd0d0;
  font-size: calc(1rem + 1vh);
  font-weight: 700;
`;

export const CreateInput = styled.input`
  margin: 0.5rem 1rem 0.5rem 1rem;
  font-size: calc(0.8rem + 1vh);
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #ffd0d0;
  color: #b34949;
  box-shadow: -2px -2px #ff8181;

  &:focus {
    border: 2px solid #b34949;
  }
`;

export const CreateTextarea = styled.textarea`
  margin: 0.5rem 1rem 0.5rem 1rem;
  min-width: 250px;
  max-width: 100%;
  height: 40px;
  max-height: 300px;
  resize: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  font-size: calc(0.6rem + 1vh);
  font-weight: 400;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #ffd0d0;
  color: #b34949;
  box-shadow: -2px -2px #ff8181;

  &:focus {
    height: auto;
    border: 2px solid #b34949;
    cursor: text;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem auto auto auto;
  gap: 1rem;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  width: 150px;
  padding: 1rem;
  margin: auto;

  color: #ffd0d0;
  border: 2px solid #ffd0d0;
  border-radius: 3px;
  font-size: calc(0.6rem + 1vh);
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  box-shadow: -2px -2px #ff8181;
  text-decoration: none;
  &:hover {
    background-color: #ffd0d0;
    color: #ff8181;
  }
`;
