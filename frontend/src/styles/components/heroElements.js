import styled from "styled-components";

export const HeroContainer = styled.div`
  /* min-height: 100vh; */
  /* temporary */
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(12, 1fr);
  margin-top: -10vh;
  padding: 1rem;
`;

export const HeaderImage = styled.img`
  grid-area: 2 / 2 / -1 / -1;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 90vh;
  transform: rotateY(180deg);
  z-index: -1;
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const HeroDescription = styled.div`
  grid-area: 1 / 6 / -1 / span 6;
  align-self: center;
  text-align: center;
  padding: 1rem;
  h4 {
    font-size: calc(3.5rem + 1vh);
    background-color: #ffd0d0;
    text-shadow: -1px 4px #ffc7c7;
    color: #b38181;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  h5 {
    font-size: calc(1.5rem + 1vh);
    background-color: #ff8181;
    color: #b34949;
  }
  p {
    margin: 0 0 2rem 0;
    font-size: calc(1rem + 1vh);
    font-weight: 500;
    background-color: #ffd0d0;
    color: #6fb382;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media screen and (max-width: 800px) {
    margin: 1rem;
    grid-area: 5 / 1 / -1 / -1;
  }

  @media screen and (max-width: 500px) {
    h4 {
      font-size: calc(2.5rem + 1vh);
    }
    h5 {
      font-size: calc(1.2rem + 1vh);
    }
    p {
      margin: 0 0 2rem 0;
      font-size: calc(0.8rem + 1vh);
    }
  }
`;
