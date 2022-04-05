import styled from "styled-components";

export const HighlightsContainer = styled.div`
  min-height: 60vh;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const HighlightsMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${({ position }) => (position ? "row" : "row-reverse")};
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const HighlightsItem = styled.li`
  text-align: center;
  width: 400px;
  list-style: none;
`;

export const Image = styled.img`
  box-shadow: -5px -5px #b34949;
  border-radius: 5px;
  height: 300px;
  width: 300px;
`;

export const HighlightsDescription = styled.section`
  margin: 1rem 0 1rem 0;
  h2 {
    background-color: #ff8181;
    font-size: calc(2rem + 1vh);
    color: #b34949;
  }
  h5 {
    margin: 1rem 0 1rem 0;
    font-size: calc(0.5rem + 1vh);
    color: #6fb382;
  }
`;
