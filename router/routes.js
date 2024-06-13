const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth_controller");
const blogControllers = require("../controllers/blog_controllers");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const authToken = require("../middlewares/authToken");

// router.route("/get_all_blogs").get(getAllBlogs);
// router.route("/upload_blog").post(uploadBlog);
//router.route("/update_blog").post(updateBlog);
// router.route("/delete_blog").post(deleteBlog)

//User
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/logout").post(authControllers.signout);
router.route("/userDetails").get(authToken, authControllers.userDetails);

//Admin

//Blog Modification
router.route("/create").post(authToken, blogControllers.addBlog);

//Blog General
router.route("/categorywiseBlog/:category").get(blogControllers.categoryBlog);
router.route("/singleblog/:id").get(blogControllers.singleBlog);
router.route("/allblogs").get(blogControllers.allBlogs);

module.exports = router;
