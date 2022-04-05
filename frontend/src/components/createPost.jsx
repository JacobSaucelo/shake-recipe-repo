import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateContainer,
  CreateForm,
  CreateLabel,
  CreateInput,
  CreateTextarea,
  ButtonContainer,
  Btn,
} from "../styles/components/createPost";

const CreatePost = ({ isActive, Toggle }) => {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    description: "",
    recipe: "",
    procedure: "",
  });
  const navigate = useNavigate();

  const postRecipe = async () => {
    await axios
      .post("/api/v1/shakes/", recipeForm, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 199 && res.status <= 399) {
          return res.data;
        }
      })
      .then((id) => {
        Toggle();
        navigate(`/shake/${id.id}`);
      })
      .catch((err) => console.log(err.response.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRecipe();
    setRecipeForm({
      title: "",
      description: "",
      recipe: "",
      procedure: "",
    });
  };

  const handleChange = (e) => {
    setRecipeForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { title, description, recipe, procedure } = recipeForm;

  return (
    <CreateContainer isActive={isActive}>
      <CreateForm onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <CreateLabel>Title</CreateLabel>
        <CreateInput
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <CreateLabel>Description</CreateLabel>
        <CreateTextarea
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <CreateLabel>Ingredients</CreateLabel>
        <CreateTextarea
          type="text"
          name="recipe"
          value={recipe}
          onChange={handleChange}
        />
        <CreateLabel>Procedure</CreateLabel>
        <CreateTextarea
          type="text"
          name="procedure"
          value={procedure}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Btn>Submit</Btn>
          <Btn onClick={Toggle}>Cancel</Btn>
        </ButtonContainer>
      </CreateForm>
    </CreateContainer>
  );
};

export default CreatePost;
