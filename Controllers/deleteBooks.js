const Book = require("../Model/book");

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book deleted succesfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = deleteBook;
