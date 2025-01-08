// const mongoose = require('mongoose');

// const { OrdersModel } = require("../model/OrdersModel");
// const { HoldingsModel } = require("../model/HoldingsModel");
// const { PositionsModel } = require("../model/PositionsModel");
// const { UsersModel } = require("../model/UserModel");

// async function placeOrder(req, res) {
//   const { name, qty, price, mode } = req.body;
//   const userId = req.user.id; // Extracted from auth middleware

//   if (!name || !qty || !price || !mode) {
//     return res.status(400).json({ message: "All fields are required!" });
//   }

//   if (!["BUY", "SELL"].includes(mode.toUpperCase())) {
//     return res.status(400).json({ message: "Invalid order mode!" });
//   }

//   try {
//     // Create and save the order
//     const newOrder = new OrdersModel({
//       userId,
//       name,
//       qty,
//       price,
//       mode: mode.toUpperCase(),
//     });
//     await newOrder.save();

//     // Update user's orders
//     const user = await UsersModel.findById(userId);
//     user.orders.push(newOrder._id);

//     if (mode.toUpperCase() === "BUY") {
//       // Handle BUY logic: Update holdings
//       let holding = await HoldingsModel.findOne({ userId, name });
//       if (holding) {
//         // Update average price and quantity
//         const totalQty = holding.qty + qty;
//         holding.avgPrice = ((holding.avgPrice * holding.qty) + (price * qty)) / totalQty;
//         holding.qty = totalQty;
//         holding.price = price; // Update current price
//         holding.net = calculateNet(holding.avgPrice, holding.price);
//         holding.day = calculateDayChange(holding.avgPrice, holding.price);
//         await holding.save();
//       } else {
//         // Create new holding
//         holding = new HoldingsModel({
//           userId,
//           name,
//           qty,
//           avgPrice: price,
//           price,
//           net: "0%",
//           day: "0%",
//         });
//         await holding.save();
//         user.holdings.push(holding._id);
//       }
//     } else if (mode.toUpperCase() === "SELL") {
//       // Handle SELL logic: Update holdings and positions
//       let holding = await HoldingsModel.findOne({ userId, name });
//       if (!holding || holding.qty < qty) {
//         return res.status(400).json({ message: "Insufficient holdings to sell!" });
//       }

//       // Deduct quantity from holdings
//       holding.qty -= qty;
//       holding.net = calculateNet(holding.avgPrice, price);
//       holding.day = calculateDayChange(holding.avgPrice, price);
//       await holding.save();

//       // Add to positions
//       const newPosition = new PositionsModel({
//         userId,
//         product: "CNC", // Assuming CNC; adjust as needed
//         name,
//         qty,
//         avg: holding.avgPrice,
//         price,
//         net: calculateNet(holding.avgPrice, price),
//         day: calculateDayChange(holding.avgPrice, price),
//         isLoss: calculateIsLoss(holding.avgPrice, price),
//       });
//       await newPosition.save();
//       user.positions.push(newPosition._id);
//     }

//     // Save user updates
//     await user.save();

//     res.status(201).json({ message: "Order placed successfully!", order: newOrder });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ message: "An error occurred while placing the order." });
//   }
// }

// // Helper functions to calculate net and day changes
// function calculateNet(avgPrice, currentPrice) {
//   const change = ((currentPrice - avgPrice) / avgPrice) * 100;
//   return `${change.toFixed(2)}%`;
// }

// function calculateDayChange(avgPrice, currentPrice) {
//   // Placeholder: Implement actual logic to calculate daily change
//   const change = ((currentPrice - avgPrice) / avgPrice) * 100;
//   return `${change.toFixed(2)}%`;
// }

// function calculateIsLoss(avgPrice, currentPrice) {
//   return currentPrice < avgPrice;
// }

// module.exports = { placeOrder };


// const mongoose = require("mongoose");

// const { OrdersModel } = require("../model/OrdersModel");
// const { HoldingsModel } = require("../model/HoldingsModel");
// const { PositionsModel } = require("../model/PositionsModel");
// const { UsersModel } = require("../model/UserModel");
// const dotenv = require("dotenv");

// dotenv.config();
// // Place a new order
// async function placeOrder(req, res) {
//     const { userId, name, qty, price, mode } = req.body;

//     if (!userId || !name || !qty || !price || !mode) {
//         return res.status(400).json({ message: "All fields are required!" });
//     }

//     try {
//         // Create a new order and save it
//         const newOrder = new OrdersModel({ userId, name, qty, price, mode });
//         await newOrder.save();

//         // Fetch user and process BUY/SELL logic
//         const user = await UsersModel.findById(userId);

//         if (mode === "BUY") {
//             // Check if holding exists for the stock
//             let holding = await HoldingsModel.findOne({ userId, name });

//             if (holding) {
//                 // Update existing holding (weighted average price calculation)
//                 const totalQty = holding.qty + qty;
//                 holding.avgPrice = ((holding.avgPrice * holding.qty) + (price * qty)) / totalQty;
//                 holding.qty = totalQty;
//                 await holding.save();
//             } else {
//                 // Create a new holding
//                 holding = new HoldingsModel({ userId, name, qty, avgPrice: price });
//                 await holding.save();
//             }
//         } else if (mode === "SELL") {
//             // Deduct from holdings and add to positions
//             const holding = await HoldingsModel.findOne({ userId, name });

//             if (!holding || holding.qty < qty) {
//                 return res.status(400).json({ message: "Insufficient holdings for SELL!" });
//             }

//             holding.qty -= qty;
//             await holding.save();

//             // Record position
//             const position = new PositionsModel({ userId, name, qty, price });
//             await position.save();
//         }

//         // Respond with success
//         res.status(201).json({ message: "Order placed successfully!", orderId: newOrder._id });
//     } catch (err) {
//         console.error("Error placing order:", err);
//         res.status(500).json({ message: "An error occurred while placing the order." });
//     }
// }

// module.exports = { placeOrder };
