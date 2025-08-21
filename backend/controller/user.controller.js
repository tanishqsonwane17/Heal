import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerController = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log("Incoming body:", req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { username, email, password, age, isAdmin, height, weight, gender } = req.body;
    if (!username || username.trim() === "") {
      return res.status(400).json({ error: "Username is required" });
    }
    if (!email || email.trim() === "") {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password || password.trim() === "") {
      return res.status(400).json({ error: "Password is required" });
    }
    if (!gender || gender.trim() === "") {
      return res.status(400).json({ error: "Gender is required" });
    }
    gender = gender.toLowerCase();
    if (!age || isNaN(age) || age <= 0) {
      return res.status(400).json({ error: "Valid age is required" });
    }
    if (!height || isNaN(height) || height <= 0) {
      return res.status(400).json({ error: "Valid height is required" });
    }
    if (!weight || isNaN(weight) || weight <= 0) {
      return res.status(400).json({ error: "Valid weight is required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username: username.trim(),
      email: email.trim(),
      password: hashedPassword,
      age: Number(age),
      isAdmin: isAdmin || false,
      height: Number(height),
      weight: Number(weight),
      gender,
    });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "1d",
});
res.status(201).json({ user, token });

  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).json(
{
    username:user.username,
    email:user.email,
    age:user.age,
    height:user.height, 
    weight:user.weight,
    gender:user.gender,
    token
}
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logoutController = async(req,res)=>{
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}