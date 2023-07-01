const Blog = require("../models/BlogModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

// create Blog --Admin
exports.createBlog = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All blog (Admin)
exports.getAdminBlogs = catchAsyncErrors(async (req, res, next) => {
  const products = await Blog.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// get All Blogs
exports.getAllBlogs = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const productsCount = await Blog.countDocuments();

  const feature = new Features(Blog.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await feature.query;
  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
  });
});

// Update Blog ---Admin
exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
  let product = await Blog.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Blog is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  product = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete Blog
exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const product = await Blog.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Blog is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < product.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      product.images[i].public_id
    );
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Blog deleted succesfully",
  });
});

// single Product details
exports.getSingleBlog = catchAsyncErrors(async (req, res, next) => {
  const product = await Blog.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Blog is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Review or Update the review


//like for blog
exports.likeBlog = catchAsyncErrors(async (req, res, next) =>  {
  try {
    const postId = req.params.postId; // get the post ID from the request params
    const post = await Blog.findById(postId); // find the post in the database by ID

    if (!post) {
      return res.status(404).json({ error: 'Post not found' }); // return an error if the post is not found
    }

    post.likes++; // increase the likes count of the post by 1
    await post.save(); // save the updated post to the database

    return res.status(200).json(post); // return the updated post as a JSON response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' }); // return a generic error if something went wrong
  }
});

//dislike for blog

exports.dislikeBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    const postId = req.params.postId; // get the post ID from the request params
    const post = await Blog.findById(postId); // find the post in the database by ID

    if (!post) {
      return res.status(404).json({ error: 'Post not found' }); // return an error if the post is not found
    }

    post.disLikes++; // increase the dislikes count of the post by 1
    await post.save(); // save the updated post to the database

    return res.status(200).json(post); // return the updated post as a JSON response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' }); // return a generic error if something went wrong
  }
});
