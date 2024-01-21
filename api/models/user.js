const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const UserSchema = new mongoose.Schema(
  {
    responsible: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
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
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    profession: {
      type: String,
      required: false,
      trim: true,
    },
    RG: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
    CPF: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
    birthDate: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      default: "Bloqueado",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    contract: {
      type: Number,
      default: 1,
    },
    adress: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
    complement: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    neighborhood: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    files: {
      type: Array,
      default: [],
    },
    payments: {
      type: Array,
      default: [],
    },
    notifications: {
      type: Array,
      default: [],
    },
    profilePic: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("User", UserSchema);
