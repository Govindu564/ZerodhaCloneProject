const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  holdings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'holding', // Reference to the Holding schema
    },
  ],
  positions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'position', // Reference to the Position schema
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'order', // Reference to the Order schema
    },
  ],
});

module.exports = {UserSchema};
