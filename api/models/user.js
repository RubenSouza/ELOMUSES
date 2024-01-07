const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const UserSchema = new mongoose.Schema(
  {
    responsible: {
      type: String,
      required: true,
      trim: true,
    },
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
    },
    CPF: {
      type: String,
      required: false,
      trim: true,
    },
    birthDate: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      default: "Liberado",
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
      required: false,
      trim: true,
    },
    number: {
      type: String,
      required: false,
      trim: true,
    },
    complement: {
      type: String,
      required: false,
      trim: true,
    },
    zipCode: {
      type: String,
      required: false,
      trim: true,
    },
    city: {
      type: String,
      required: false,
      trim: true,
    },
    neighborhood: {
      type: String,
      required: false,
      trim: true,
    },
    state: {
      type: String,
      required: false,
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
