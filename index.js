console.log("Hello World");
const express = require("express");
const setUpDB = require("./utils/db");
const Book = require("./Model/book");
const books = require("./utils/booklist");
const getBooks = require("./Controllers/getBooks");

const updateBooks = require("./Controllers/updateBooks");
const addBooks = require("./Controllers/addbooks");
const deleteBook = require("./Controllers/deleteBooks");
const getBookById = require("./Controllers/getBookById");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

setUpDB()
  .then(async () => {
    console.log("✅ Database Connected");

    const existingBooks = await Book.countDocuments();

    if (existingBooks === 0) {
      await Book.insertMany(books);
      console.log("📚 Books inserted Successfully");
    } else {
      console.log("⚠️ Books already exist, skipping insertion.");
    }
  })
  .catch((err) => {
    console.error("❌ Database Error:", err);
  });

app.get("/books", getBooks);
app.get("/books/:id",getBookById)
app.post("/books",addBooks)
app.put("/books/:id",updateBooks);
app.delete("/books/:id",deleteBook)

app.listen(port, () => {
  console.log(`🚀 Server Listening on port ${port}`);
});
