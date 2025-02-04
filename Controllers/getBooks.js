const Book = require("../Model/book");

const getBooks = async (req,res)=>{
    try {
        console.log("📥 Fetching books from DB...");
        const books = await Book.find();
        res.status(200).json(books);
      } catch (error) {
        console.error("❌ Error fetching books:", error);
        res.status(500).json({ message: "Internal Server Error", error });
      }
}

module.exports = getBooks;