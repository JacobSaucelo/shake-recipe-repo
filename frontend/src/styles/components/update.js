import styled from "styled-components";

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ff9393;
  padding: 1rem;
  border-radius: 10px;

  h1 {
    color: #843535;
    text-align: center;
  }
`;

export const UpdateLabel = styled.label`
  color: #b34949;
  font-size: calc(1rem + 1vh);
  font-weight: 700;
`;

export const UpdateTitle = styled.input`
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
  box-shadow: -2px -2px #b34949;

  &:focus {
    border: 2px solid red;
  }
`;

export const UpdateTextArea = styled.textarea`
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
  box-shadow: -2px -2px #b34949;

  &:focus {
    height: auto;
    border: 2px solid red;
    cursor: text;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem auto auto auto;
  gap: 1rem;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const UpdateSubmit = styled.button`
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
  box-shadow: -2px -2px #b34949;
  text-decoration: none;
  &:hover {
    background-color: #ffd0d0;
    color: #ff8181;
  }
`;
