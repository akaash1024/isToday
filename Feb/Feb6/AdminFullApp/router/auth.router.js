// * ----------------
// ? Express Router
// * ----------------

const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const registerSchema = require("../validators/auth.validator");

const router = require("express").Router();

router.route("/").get(authController.home);

router.route("/register").post(validate(registerSchema), authController.register);
router.route("/login").post(authController.login);

// ! exporting
module.exports = router;
