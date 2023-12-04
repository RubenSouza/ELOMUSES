const mongoose = require("mongoose");
const User = mongoose.model("User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const UserController = {
  //POST LOGIN

  async login(req, res, next) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário ou senha incorretos" });
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password) {
      return res.status(400).json({ message: "Usuário ou senha incorretos" });
    }

    const accesstoken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password: dbPassword, ...info } = user._doc;
    return res.status(200).json({ ...info, accesstoken });
  },

  //PUT UPDATE

  async update(req, res, next) {
    const { username, email, password } = req.body;

    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    try {
      let user = await User.findById(req.payload.id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      if (typeof username !== "undefined") {
        user.username = username;
      }
      if (typeof email !== "undefined") {
        user.email = email;
      }
      if (typeof password !== "undefined") {
        user.password = encryptedPassword;
      }

      try {
        let newUser = await user.save();
        const { password, ...info } = newUser._doc;

        return res.status(200).json({ info });
      } catch (error) {
        res.status(500).json({ message: "O registro falhou" });
      }
    } catch (error) {
      res.status(500).json({ message: "O registro falhou" });
    }
  },

  //GET USER DATA

  async index(req, res, next) {
    try {
      let user = await User.findById(req.payload.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      const { password, ...info } = user._doc;
      return res.json({ info });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  /* ADMIN SECTION */

  //POST REGISTER

  async register(req, res, next) {
    const {
      name,
      username,
      email,
      password,
      phone,
      profilePic,
      isAdmin,
      status,
      contract,
    } = req.body;
    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    try {
      const user = await User.create({
        name,
        username,
        email,
        password: encryptedPassword,
        phone,
        profilePic,
        status,
        contract,
        isAdmin,
      });

      const { password, ...info } = user._doc;
      return res.json(info);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "O registro falhou" });
    }
  },

  //GET :ID

  async show(req, res, next) {
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
      const { password, ...info } = user._doc;
      return res.json({ info });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  //GET ALL USERS ADMIN

  async getAdmin(req, res, next) {
    let query = req.query.new;

    try {
      let user = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      return res.json({ user });
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  //GET PAGINATED USERS ADMIN

  async getPaginatedAdmin(req, res, next) {
    const page = req.query.page;
    const limit = 16;

    try {
      const options = {
        page: page,
        limit: limit,
      };

      const result = await User.paginate({}, options);
      return res.json(result);
    } catch (error) {
      return res.status(401).json({ errors: error });
    }
  },

  //PUT :ID ADMIN

  async updateAdmin(req, res, next) {
    const {
      name,
      username,
      email,
      password,
      phone,
      profilePic,
      isAdmin,
      status,
      contract,
    } = req.body;

    let encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }

      if (name) {
        user.name = name;
      }
      if (username) {
        user.username = username;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = encryptedPassword;
      }
      if (phone) {
        user.phone = phone;
      }
      if (profilePic) {
        user.profilePic = profilePic;
      }
      if (status) {
        user.status = status;
      }
      if (contract) {
        user.contract = contract;
      }
      if (isAdmin) {
        user.isAdmin = isAdmin;
      }

      try {
        let newUser = await user.save();
        const { password, ...info } = newUser._doc;

        return res.status(200).json({ info });
      } catch (error) {
        return res.status(401).json({ errors: "Usuário não registrado" });
      }
    } catch (error) {
      return res
        .status(401)
        .json({ errors: "Não foi possível modificar o usuário" });
    }
  },

  //DELETE :ID ADMIN

  async deleteAdmin(req, res, next) {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({ errors: "Usuário não registrado" });
    }
    return user
      .deleteOne()
      .then(() => {
        return res.json({ deletado: true });
      })
      .catch(next);
  },
};

module.exports = UserController;
