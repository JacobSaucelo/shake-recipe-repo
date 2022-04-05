const asyncHandler = require("express-async-handler");

const Shakes = require("../models/shakesModel");
const User = require("../models/userModel");

//?     get     /api/v1/shakes/     private
const getShakes = asyncHandler(async (req, res) => {
  const shakeRecipes = await Shakes.find();

  res.status(200).json(shakeRecipes);
});

//?     post     /api/v1/shakes/     private
const postShakes = asyncHandler(async (req, res) => {
  const { title, recipe, description, procedure } = req.body;
  if (!title || !recipe || !description || !procedure) {
    res.status(400);
    throw new Error("please fill every required fields.");
  }

  const shakeAuthor = await User.findById(res.locals.user);
  if (!shakeAuthor) {
    res.status(200);
    throw new Error("cant find user Author");
  }

  const post = await Shakes.create({
    user: res.locals.user,
    shakeAuthor: shakeAuthor.userName,
    title,
    recipe,
    description,
    procedure,
  });
  if (!post) {
    res.status(400);
    throw new Error("unable to create post");
  }
  res.status(200).json({
    success: true,
    id: post._id,
  });
});

//?     put     /api/v1/shakes/:id     private
const putShakes = asyncHandler(async (req, res) => {
  const post = await Shakes.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("shake unavailable");
  }

  const user = await User.findById(res.locals.user);
  if (!user) {
    res.status(400);
    throw new Error("user not found.");
  }
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Unauthorized invalid token.");
  }

  const updatedPost = await Shakes.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  if (!updatedPost) {
    res.status(400);
    throw new Error("Unable to update this post.");
  }
  res.status(200).json({
    success: true,
    id: updatedPost._id,
    updatedPost,
  });
});

//?     del     /api/v1/shakes/:id     private
const delShakes = asyncHandler(async (req, res) => {
  const post = await Shakes.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error("unable to find post.");
  }

  const user = await User.findById(res.locals.user);
  if (!user) {
    res.status(400);
    throw new Error("unable to find post");
  }
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("unauthorized");
  }

  const deletePost = await post.remove();
  if (!deletePost) {
    res.status(400);
    throw new Error("unable to delete post");
  }
  res.status(200).json({
    success: true,
    id: post._id,
  });
});

//?     get     /api/v1/shakes/:id     private
const getMore = asyncHandler(async (req, res) => {
  const shakeInfo = await Shakes.findById(req.params.id);
  if (!shakeInfo) {
    res.status(400);
    throw new Error("Recipe Unavailable.");
  }
  res.status(200).json({
    recipe: shakeInfo,
    isSameUser: res.locals.user.id === shakeInfo.user.toString() ? true : false,
  });
});

module.exports = {
  getShakes,
  postShakes,
  putShakes,
  delShakes,
  getMore,
};
