const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});
module.exports = { PositionsSchema };
