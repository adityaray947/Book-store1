import User from "../Model/User.model.js";
import bcryptjs from "bcryptjs";

// Signup function
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    console.log("email: ", email);
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword
    });

    await createdUser.save();

    res.status(200).json({ message: "User created successfully" ,user:
        {
            _id : createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        }
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email });

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email
      }
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
