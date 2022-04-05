import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import {
  DashboardSpinner,
  DashboardContainer,
  CreatePostContainer,
  CreateIcon,
  RecipesContainer,
  RecipeLink,
  DashboardRecipe,
} from "../styles/pages/dashboardElements";
import CreatePost from "../components/createPost";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const navigate = useNavigate();

  const createToggle = () => {
    setIsCreate(!isCreate);
  };

  //?   fetch dashboard
  const fetchRecipes = async () => {
    await axios
      .get("http://localhost:3001/api/v1/shakes/", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 199 && res.status <= 299) {
          return res.data;
        }
        throw new Error(res.statusText);
      })
      .then((receipt) => {
        setRecipes(receipt);
        setIsAuthenticating(false);
      })
      .catch((err) => {
        setIsAuthenticating(true);
        navigate("/login");
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isAuthenticating) {
    return (
      <DashboardSpinner>
        <BounceLoader color="#FF8181" size="100px" />
      </DashboardSpinner>
    );
  }

  return (
    <DashboardContainer>
      <CreatePost isActive={isCreate} Toggle={createToggle} />
      <CreatePostContainer onClick={createToggle}>
        <h4>Create Recipe</h4>
        <CreateIcon />
      </CreatePostContainer>
      <RecipesContainer>
        {recipes.map((post) => {
          return (
            <DashboardRecipe key={post._id}>
              <RecipeLink to={`/shake/${post._id}`}>
                <h4>{post.title}</h4>
                <h5>-{post.shakeAuthor || "Anonymous"}</h5>
                <p>
                  {post.description.length >= 60
                    ? post.description.substring(0, 60) + "..."
                    : post.description}
                </p>
              </RecipeLink>
            </DashboardRecipe>
          );
        })}
      </RecipesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
