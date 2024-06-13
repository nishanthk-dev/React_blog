const User = require("../models/userModel");
const Blog = require("../models/blogModel");

const addBlog = async (req, res, next) => {
  try {
    const sessionUserId = req.userId;

    if (!sessionUserId) {
      console.log("please Login!!");
    }
    const sessionemail = req.email;

    const singleuser = await User.findOne({ email: sessionemail }).select({
      password: 0,
    });
    const authorname = singleuser.username;
    const { title, image, category, description } = req.body;

    const blogCreated = await Blog.create({
      title,
      image,
      category,
      description,
      author: authorname,
    });
    res.status(201).json({
      message: "blog created successfully",
      data: blogCreated,
      error: false,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const allBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});

    res.json({
      data: blogs,
      message: "blogs fetched successfully",
      error: false,
      success: true,
    });
    next();
  } catch (error) {
    next(error);
  }
};

const categoryBlog = async (req, res, next) => {
  try {
    const { category } = req?.params;
    const categoryblog = await Blog.find({ category });
    res.json({
      data: categoryblog,
      message: "blogs fetched successfully",
      error: false,
      success: true,
    });
    next();
  } catch (error) {
    next(error);
  }
};

const singleBlog = async (req, res, next) => {
  try {
    const { id } = req?.params;
    const blog = await Blog.findById(id);
    res.json({
      data: blog,
      message: "blog fetched successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { addBlog, allBlogs, categoryBlog, singleBlog };
