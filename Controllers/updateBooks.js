const Book = require("../Model/book");
const updateBooks = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, year } = req.body;

    if (!title && !author && !year) {
      return res
        .status(400)
        .json({ message: "Please provide atleast one field to update" });
    }

    const updateBook = await Book.findByIdAndUpdate(id, {title, author, year}, {new:true})
    if(!updateBook){
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({message:updateBook})

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = updateBooks;
