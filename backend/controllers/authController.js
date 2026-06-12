import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";
// import User from "../models/User.js";
import User from "../models/User.js";
import UserData from "../models/UserData.js";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      profileFilled: false
    });

    // generate token
    // const token = jwt.sign(
    //   { id: user._id },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "7d" }
    // );
    const token=jwt.sign({ id: user._id, role: user.role, profileFilled: user.profileFilled }, process.env.JWT_SECRET);
    console.log("data is "+token)

    res.status(201).json({
      message: "Signup successful",
      token,
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     const userData = await UserData.findOne({ user: user._id }); // ✅ fetch profile data
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: user._id ,role:user.role, profileFilled: userData ? true : false }, process.env.JWT_SECRET, {
//       expiresIn: "7d"
//     });

//     res.json({ token, user });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // ✅ FIRST check user
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // ✅ THEN fetch userData
    const userData = await UserData.findOne({ user: user._id });

    // ✅ check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        profileFilled: userData ? true : false
      },
      // process.env.JWT_SECRET,
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });

  } catch (error) {
    console.error(error); // ✅ add this
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { email } = req.query;

    // ✅ check email
    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const data = await User.findOne({ email });

    // ✅ not found
    if (!data) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // ✅ success
    res.status(200).json({
      message: "User fetched successfully",
      data
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message
    });
  }
};



//FORGOT PASSWORD API
// export const forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   // ✅ get user
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // ✅ generate token
// const resetToken = crypto.randomBytes(32).toString("hex");
// console.log( "Reset Token"+resetToken);

// const hashedToken = crypto
//   .createHash("sha256")
//   .update(resetToken)
//   .digest("hex");

//   console.log("Hashed Password"+ hashedToken);

// user.resetPasswordToken = hashedToken; 
//   user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

//   await user.save();

// const resetUrl = `https://www.rommate.in/reset-password/${resetToken}`;

//   // ✅ email transporter
//   const transporter = nodemailer.createTransport({
//     // service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,          // ✅ try 587 instead of 465
//   secure: false,      // ✅ false for 587
//   auth: {
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASS,
// },
//   });

//   // ✅ send mail
//   await transporter.sendMail({
//     to: user.email,
//     subject: "Password Reset",
//     html: `
//       <p>Click below to reset your password:</p>
//       <a href="${resetUrl}">${resetUrl}</a>
//     `,
//   });

//   res.json({ message: "Reset link sent to email" });
// };

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `https://www.rommate.in/reset-password/${resetToken}`;

    await resend.emails.send({
      from: "onboarding@resend.dev", // ⏳ change to "noreply@rommate.in" after domain verified
      to: "rommate4u@gmail.com",     // ⚠️ hardcoded YOUR email for testing (sandbox restriction)
      subject: "Password Reset – Rommate",
      html: `
        <div style="font-family:sans-serif; max-width:480px; margin:auto;">
          <h2>Reset Your Password</h2>
          <p>This link expires in <strong>10 minutes</strong>.</p>
          <a href="${resetUrl}"
             style="display:inline-block; padding:12px 24px; background:#3d3899;
                    color:white; border-radius:8px; text-decoration:none; font-weight:600;">
            Reset Password
          </a>
          <p style="color:#888; font-size:13px; margin-top:16px;">
            If you didn't request this, ignore this email.
          </p>
        </div>
      `,
    });

    res.json({ message: "Reset link sent to email" });

  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Failed to send reset email. Please try again." });
  }
};
//RESET PASSWORD API
export const resetPassword = async (req, res) => {
  const token = req.params.token;

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ error: "Invalid or expired token" });
  }

  // user.password = req.body.password;
  

user.password = await bcrypt.hash(req.body.password, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.json({ message: "Password reset successful" });
};





// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "your@gmail.com",
//     pass: "your_app_password",
//   },
// });

// await transporter.sendMail({
//   to: user.email,
//   subject: "Password Reset",
//   html: `<p>Click below to reset:</p>
//          <a href="${resetUrl}">${resetUrl}</a>`,
// });