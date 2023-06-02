const { Book } = require('../models');

const getAll = async () => {
  return await Book.findAll({ order: [['title', 'ASC']] });
};

const getById = async (id) => {
  return await Book.findBypk(id);
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  return await Book.create({ title, author, pageQuantity, publisher });
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [update] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id }}
  );
  return update;
};

const remove = async (id) => {
  return await Book.destroy({ where: { id } },);
};

const getByAuthor = async (author) => {
  return await Book.findAll({ where: { author }, order: [['title', 'ASC']] })
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};