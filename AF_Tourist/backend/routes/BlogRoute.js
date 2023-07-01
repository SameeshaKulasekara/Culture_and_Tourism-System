const express = require("express");
const {
  createBlog,
  getAdminBlogs,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  likeBlog,
  dislikeBlog,
 
} = require("../controller/BlogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/blogs").get(getAllBlogs);

router
  .route("/admin/blogs")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminBlogs);

router
  .route("/blog/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBlog);

router
  .route("/blog/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBlog)
  .delete(isAuthenticatedUser, authorizeRoles("admin"),   deleteBlog,
)
  .get(getSingleBlog);

router.route("/blog/:postId/like").post(isAuthenticatedUser, likeBlog);
router.route("/blog/:postId/dislike").post(isAuthenticatedUser, dislikeBlog);

module.exports = router;
