const mongoose = require("mongoose");

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
    status: {
      type: String,
      default: "Liberado",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);

// Usuário{
// 	Nome completo
// 	Username
// 	Email
//  Senha
//  Foto de perfil
//  Telefone
// 	Admnistrador
// 	Aluno
// 	Arquivos(Array)
// 	Pagamentos
// 	Aulas
// 	Notificações
// 	Status (
// 		Liberado
// 		Bloqueado
// 	)
// }
