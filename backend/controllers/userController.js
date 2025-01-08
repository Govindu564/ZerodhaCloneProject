const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { UsersModel } = require("../model/UserModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

dotenv.config();

async function signup(req, res) {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long!" });
  }

  try {
    // Check if user already exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UsersModel({
      username,
      email,
      password: hashedPassword,
      holdings: [], // Initially empty
      positions: [], // Initially empty
      orders: [], // Initially empty
    });

    // Save user to database
    const savedUser = await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: savedUser._id, username: savedUser.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Return response with token and user data
    res
      .status(201)
      .json({
        message: "Signup successful!",
        token,
        userId: savedUser._id,
        username: savedUser.username,
      });
  } catch (err) {
    console.error("Error during signup:", err.message);
    res.status(500).json({ message: "Server error occurred during signup!" });
  }
}

async function login(req, res) {
    const { email, password } = req.body;
  
    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }
  
    try {
      // Check if user exists
      const user = await UsersModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Invalid email or password!" });
      }
  
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password!" });
      }
  
      // Generate token
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({
        message: "Login successful!",
        token,
        userId: user._id,
        username: user.username,
      });
    } catch (err) {
      console.error("Login error occurred!", err.message);
      res.status(500).json({ message: "An unexpected server error occurred!" });
    }
  }

  async function createOrder(userId, orderData) {
    try {
        // Create a new order
        const newOrder = new Order(orderData);
        await newOrder.save();

        // Find the user and update their orders
        const user = await User.findById(userId);
        user.orders.push(newOrder._id);

        // Handle BUY or SELL logic
        if (orderData.mode === 'BUY') {
            // Update holdings for a BUY
            const existingHolding = await Holding.findOne({ name: orderData.name });
            if (existingHolding) {
                existingHolding.qty += orderData.qty;
                existingHolding.price = orderData.price; // Update price if needed
                await existingHolding.save();
            } else {
                const newHolding = new Holding({
                    name: orderData.name,
                    qty: orderData.qty,
                    avg: orderData.price,
                    price: orderData.price,
                    net: '0%',
                    day: '0%',
                });
                await newHolding.save();
                user.holdings.push(newHolding._id);
            }
        } else if (orderData.mode === 'SELL') {
            // Update positions for a SELL
            const newPosition = new Position({
                product: 'CNC', // Example product
                name: orderData.name,
                qty: orderData.qty,
                avg: orderData.price,
                price: orderData.price,
                net: '0%',
                day: '0%',
                isLoss: false, // Logic for determining loss
            });
            await newPosition.save();
            user.positions.push(newPosition._id);
        }

        // Save user changes
        await user.save();
        console.log('Order created and user updated successfully');
    } catch (error) {
        console.error('Error creating order:', error);
    }
}

module.exports = { signup,login,createOrder };
