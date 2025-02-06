// * ----------------
// ? Auth - Controllers

const User_Database = require("../models/user.model");
const ApiResponse = require("../utils/ApiResponse");

// * ----------------
const home = (req, res, next) => {
  try {
    throw {
      errors: [{ message: "Invalid input format Akash" }],
    };
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(error);
    // res.status(400).json({ msg: message });
    next(error);
  }
};

const register = async (req, res) => {
  // console.log(req.body);
  // ! process.exit(0);

  const { username, email, phone, password } = req.body;

  const isUserExit = await User_Database.findOne({ email });

  if (isUserExit) {
    return res.status(400).json({ msg: "Email is already registered.. ." });
  }

  const newUser = await User_Database.create({
    username,
    password,
    email,
    phone,
  });
  console.log(newUser)
  
  res.send(new ApiResponse(201, newUser, "Successfully Created"))

  try {
  } catch (error) {
    next(error);
  }
};

const login = (req, res) => {
  //
};

// ! exporting
module.exports = { home, register, login };
