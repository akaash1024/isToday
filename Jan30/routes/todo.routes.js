const router = require("express").Router();
const todoRoutes = require("../controller/todo.controller");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated.middleware");
const isUserAuthorized = require("../middlewares/isUserAuthorized.middleware");

const validate = require("../middlewares/validate.middleware");
const data_ValidationSchema = require("../validatorZOD/data.validator");

router.route("/").get(isUserAuthenticated, todoRoutes.getTodo);
router
  .route("/add")
  .post(
    isUserAuthenticated,
    validate(data_ValidationSchema),
    todoRoutes.addTodo
  );
router
  .route("/update/:id")
  .patch(
    isUserAuthenticated,
    validate(data_ValidationSchema),
    isUserAuthorized,
    todoRoutes.updateTodo
  );
router
  .route("/delete/:id")
  .delete(
    isUserAuthenticated,
    isUserAuthorized,
    todoRoutes.deleteTodo
  );

module.exports = router;
