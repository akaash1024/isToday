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

  const newUserDetails = {
    token: await newUser.generateToken(),
    userId: newUser._id.toString(),
  };
  res
    .status(201)
    .send(
      new ApiResponse(201, { newUserDetails, newUser }, "Successfully Created")
    );

  try {
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    const isUserExit = await User_Database.findOne({ email });
    console.log(isUserExit);

    if (!isUserExit) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    const user = await isUserExit.comparePassword(password);

    if (user) {
      const userDetails = {
        token: await isUserExit.generateToken(),
        userId: isUserExit._id.toString(),
      };
      res
        .status(200)
        .send(new ApiResponse(200, { userDetails }, "Login Successfull. .."));
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

// const user = async (req, res, next) => {
//   console.log(req.user);
  
//   try {
//     const userData = req.user;
//     console.log(userData);
//     return res.status(200).json({ userData });
//   } catch (error) {
//     next(error);
//   }
// };

// ! exporting
module.exports = { home, register, login, };
