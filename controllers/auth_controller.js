const userModel = require("../models/userModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "user exist already" });
    }

    const userCreated = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const userDetails = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details fetched successfully",
    });
  } catch (error) {
    error.status = 400;
    error.message = "Failed to fetch userdetails";
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    } else {
      const passwordValidation = await bcrypt.compare(
        password,
        userExist.password
      );
      const Tokenvalue = await userExist.generateToken();

      if (passwordValidation) {
        res.status(200).json({
          msg: "Login successful",
          token: Tokenvalue,
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ msg: "Invalid Credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json("Logout Successful");
  } catch (error) {
    next(error);
  }
};

module.exports = { register, userDetails, login, signout };
