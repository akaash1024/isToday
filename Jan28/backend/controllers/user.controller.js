require("dotenv").config();
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  
  try {
    const isExistUser = await UserModel.findOne({ email });
    if (isExistUser) {
      return res.status(203).json({ msg: "User already registered.. ." });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new UserModel({
      name,
      email,
      role,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ msg: `User registered successfully`, newUser });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isUserMatched = await bcrypt.compare(password, user.password);
    if (!isUserMatched)
      return res.status(404).json({ msg: "Invalid Credentials" });

    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      process.env.SECRET_KEY
    );

    res.status(200).json({ msg: "User login successfully", token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
  //
};

module.exports = { register, login };
