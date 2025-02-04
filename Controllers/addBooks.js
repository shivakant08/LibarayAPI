const Book = require("../Model/book");

const addBooks = async (req, res) => {
  try {
    console.log(req.body)
    const { title, author, year } = req.body;
    const existingBook = await Book.findOne({ title, author });

    if (existingBook) {
      return res.status(400).json({ message: "Book already exists" });
    }

    const newBook = new Book({ title, author, year });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = addBooks;
