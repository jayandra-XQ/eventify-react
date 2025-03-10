import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

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


//controller for signin
export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || !email === '' || !password === '') {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(401).json({ message: 'User not found' });
    }


    // compare password using bcryptjs
    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }


    // using jsonwebtoken
    const token = jwt.sign(
      { id: validUser._id }, process.env.JWT_SECRET
    )

    const { password: pass, ...rest } = validUser._doc

    res.status(200).cookie('access_token', token, {
      httpOnly: true
    })
      .json(rest)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}