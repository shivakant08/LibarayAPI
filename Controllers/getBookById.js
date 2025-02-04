const Book = require("../Model/book");

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book)
      return res
        .status(404)
        .json({ message: "Book not found by the requested id" });

    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getBookById;
