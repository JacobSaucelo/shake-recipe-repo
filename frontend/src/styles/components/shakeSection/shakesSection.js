import styled from "styled-components";

export const ShakeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  width: 100%;
  background-color: #ff9393;
`;

export const ShakeHeader = styled.div`
  margin: 2rem;
  text-align: center;
  h1 {
    font-size: calc(2.5rem + 1vh);
    color: #ffd0d0;
    /* margin-bottom: -20px; */
    text-shadow: -3px -3px #b34949;
  }
  h2 {
    background-color: #ffd0d0;
    font-size: calc(1.5rem + 1vh);
    color: #b35656;
  }
`;

export const ShakeProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Shake = styled.li`
  width: 300px;
  list-style: none;
  text-align: center;
  margin: 1rem 0 1rem 0;
  h2 {
    color: #b34949;
    margin: 0.5rem 0 0.5rem 0;
    border-bottom: 5px solid #ffd0d0;
  }
  p {
    margin: 1rem 0 1rem 0;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: #807070;
  }
`;

export const ShakeImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  box-shadow: -5px -5px #b34949;
  border-radius: 5px;
`;

export const BorderDesign = styled.div`
  border-bottom: 20px solid #ffd0d0;
`;
