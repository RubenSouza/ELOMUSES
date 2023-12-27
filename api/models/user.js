const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profilePic: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    files: {
      type: Array,
      default: [],
    },
    payments: {
      type: Array,
      default: [],
    },
    classes: {
      type: Array,
      default: [],
    },
    notifications: {
      type: Array,
      default: [],
    },
    contract: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      default: "Liberado",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("User", UserSchema);
