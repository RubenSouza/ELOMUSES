const mongoose = require("mongoose");
const File = mongoose.model("File");

const FileController = {
  async register(req, res, next) {
    const { name, slug, url } = req.body;

    try {
      const file = await File.create({ name, slug, url });
      return res.json({ file });
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    const { name, slug, url } = req.body;
    const id = req.params.id;
    try {
      const file = await File.findById(id);

      if (name) file.name = name;
      if (slug) file.slug = slug;
      if (url) file.url = url;
      await category.save();

      return res.json({ file });
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;
    try {
      await File.findByIdAndDelete(id);
      return res.json({ message: "File deleted" });
    } catch (error) {
      next(error);
    }
  },

  async index(req, res, next) {
    const page = req.query.page || 1;
    const limit = 16;

    try {
      const myAggregate = User.aggregate();

      const options = {
        page: page,
        limit: limit,
      };

      const files = await File.aggregatePaginate(myAggregate, options);

      return res.json(files);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    const id = req.params.id;
    try {
      const file = await File.findById(id);
      return res.json(file);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = FileController;
