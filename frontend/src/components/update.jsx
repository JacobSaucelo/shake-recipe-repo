import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import {
  UpdateForm,
  UpdateLabel,
  UpdateTitle,
  UpdateTextArea,
  UpdateSubmit,
  BtnContainer,
} from "../styles/components/update";

const Update = ({ info, id, toggle }) => {
  const [updatedPost, setUpdatedPost] = useState({
    title: info.title,
    description: info.description,
    recipe: info.recipe,
    procedure: info.procedure,
  });
  const navigate = useNavigate();

  const updatePost = async () => {
    await axios
      .put(`http://localhost:3001/api/v1/shakes/${id}`, updatedPost, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 199 && res.status <= 299) {
          toggle();
        }
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost();
  };

  const handleChange = (e) => {
    setUpdatedPost((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { title, description, recipe, procedure } = updatedPost;

  return (
    <UpdateForm onSubmit={handleSubmit}>
      <h1>
        <FaEdit />
        Edit Shake
      </h1>
      <UpdateLabel>
        Title
        <MdEdit />
      </UpdateLabel>
      <UpdateTitle
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        maxLength="30"
      />
      <UpdateLabel>
        Description
        <MdEdit />
      </UpdateLabel>
      <UpdateTextArea
        name="description"
        value={description}
        cols="30"
        rows="10"
        onChange={handleChange}
        maxLength="250"
      />
      <UpdateLabel>
        Ingredients
        <MdEdit />
      </UpdateLabel>
      <UpdateTextArea
        name="recipe"
        value={recipe}
        cols="30"
        rows="10"
        onChange={handleChange}
        maxLength="250"
      />
      <UpdateLabel>
        Procedure
        <MdEdit />
      </UpdateLabel>
      <UpdateTextArea
        name="procedure"
        value={procedure}
        cols="30"
        rows="10"
        onChange={handleChange}
        maxLength="250"
      />
      <BtnContainer>
        <UpdateSubmit>Update Post</UpdateSubmit>
        <UpdateSubmit onClick={toggle}>Cancel</UpdateSubmit>
      </BtnContainer>
    </UpdateForm>
  );
};

export default Update;
