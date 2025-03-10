import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

//controller for signup 
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, gender } = req.body;

  if (!firstName || !lastName || !email || !password || !gender || !firstName === '' || !lastName === '' || !email === '' || !password === '') {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10)

  const newUser = User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    gender
  });

  try {
    await newUser.save();
    res.json('Signup successful')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}