import cloudinary from "../config/cloudinary.js";
import HttpError from "../middleware/HttpError.js";
import Blog from "../model/Blog.js";

const createBlog = async (req, res, next) => {
  try {
    const { title, author, content } = req.body;

    const blogImage = req.files?.blogImage?.[0]?.path;
    const blogVideo = req.files?.blogVideo?.[0]?.path;

    if (!blogImage) {
      return next(new HttpError("Blog Image is required", 400));
    }

    const newBlog = await Blog.create({
      title,
      author,
      content,
      blogImage,
      blogVideo,
    });

    res
      .status(201)
      .json({ success: true, message: "Blog create successfully", newBlog });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});

    if (blogs.length === 0) {
      return res.status(200).json({ message: "No any blog found" });
    }

    res.status(200).json({ success: true, blogs });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    res.status(200).json({ success: true, blog });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    if ((req.body || Object.keys(req.body).length === 0) && !req.file) {
      return next(new HttpError("No update data provided", 400));
    }

    const update = Object.keys(req.body);

    const allowedUpdates = ["title", "author", "content"];

    const isValid = update.every((field) => {
      allowedUpdates.includes(field);
    });

    if (!isValid) {
      return next(new HttpError("invalid update fields"), 400);
    }

    update.forEach((update) => {
      blog[update] = req.body[update];
    });

    if (req.file) {
      if (blog.cloudinary_id) {
        await cloudinary.uploader.destroy(blog.cloudinary_id);
      }

      blog.blogImage = req.file.path;

      blog.cloudinary_id = req.file.filename;
    }

    await blog.save();

    res
      .status(200)
      .json({ success: true, message: "Blog Update Successfully", blog });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog Not be found", 404));
    }

    if (blog.cloudinary_id) {
      await cloudinary.uploader.destroy(blog.cloudinary_id);
    }

    await blog.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
    next(new HttpError(error.message, 500));
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog };