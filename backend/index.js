const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const mainRouter = require("./routers/MainRoute");

const PORT = process.env.PORT || 3300;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(mainRouter);

// Existing Routes
app.get("/", (req, res) => { 
  res.send("Hello root!");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  console.log("Order saved");
  res.send("Order saved");
});

// Connect to MongoDB and Start Server
// app.listen(PORT, () => {
//   console.log("App started!");
//   mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log("DB connected!");
//   });
// });

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected!");
        app.listen(PORT, () => {
            console.log("App started on port", PORT);
        });
    })
    .catch((error) => {
        console.error("DB connection error:", error);
    });
