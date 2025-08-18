import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import bcrypt, { hash } from "bcrypt";

export const userController = (req, res) => {
  res.send("userController");
};

export const registerController = async (req, res) => {
  try {
    // ✅ Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, age, isAdmin, height, weight, gender } = req.body;
    const hashedPassword =  await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // ✅ Hash password
    // ✅ Save user in DB
    const user = await userModel.create({
      username,
      email,
      password:hashedPassword,
      age,
      isAdmin,
      height,
      weight,
      gender,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
