const userController = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.route("/").get((req, res) => {
  res.status(200).json({ msg: "Hello User Route" });
});

// ! need to create here a admin route where admin can see all users 

userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);

module.exports = userRouter;
