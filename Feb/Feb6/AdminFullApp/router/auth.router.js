// * ----------------
// ? Express Router
// * ----------------

const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { registerSchema, loginSchema } = require("../validators/auth.validator");

const router = require("express").Router();

router.route("/").get(authController.home);

router
  .route("/register")
  .post(validate(registerSchema), authController.register);
  
router.route("/login").post(validate(loginSchema), authController.login);

// ! exporting
module.exports = router;

