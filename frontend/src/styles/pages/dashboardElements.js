import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const DashboardSpinner = styled.div`
  display: flex;
  text-align: center;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const DashboardContainer = styled.div`
  padding: 1rem;
`;

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b34949;
  border: 2px solid #b34949;
  border-radius: 10px;
  box-shadow: -2px -2px #ff9393;
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
  min-width: 200px;
  max-width: 250px;
  margin: auto;

  &:hover {
    background-color: #b34949;
    color: #ff8181;
  }
`;

export const CreateIcon = styled(AiOutlinePlus)`
  font-size: calc(1rem + 1vh);
`;

export const RecipesContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const DashboardRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff8181;
  text-align: center;
  border-radius: 10px;
  height: 250px;
  width: 250px;
  padding: 1rem;
`;

export const RecipeLink = styled(NavLink)`
  text-decoration: none;
  h4 {
    color: #b35656;
    background-color: #ffd0d0;
  }
  h5 {
    color: #b35656;
    margin: 0.5rem;
  }
  p {
    color: #807070;
    font-weight: 600;
  }
`;
