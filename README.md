<h1>📚 Book Management API</h1>

A simple Node.js API for managing books using Express.js and MongoDB.

<h1>🚀 Features</h1>

📥 Add new books

✍️ Update book details

📚 Get all books

🔍 Get a book by ID

🗑️ Delete a book

<h1>🛠 Tech Stack</h1>

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Environment Variables: dotenv

API Testing: Postman / cURL

<h1>🛆 Installation</h1>

Clone the repository

git clone https://github.com/yourusername/book-api.git
cd book-api

Install dependencies

npm install

Set up environment variablesCreate a .env file and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string

Start the server

npm start

OR if using nodemon:

npm run dev

<h1>📌 API Endpoints</h1>

1️⃣ Add a New Book

URL: POST /books

Request Body (JSON):

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925
}

Response:

{
  "message": "📚 Book added successfully!",
  "book": {
    "_id": "65a12345b67890cde1234567",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "__v": 0
  }
}

2️⃣ Get All Books

URL: GET /books

Response Example:

[
  {
    "_id": "65a12345b67890cde1234567",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925
  }
]

3️⃣ Get a Book by ID

URL: GET /books/:id

Example:

curl -X GET http://localhost:3000/books/65a12345b67890cde1234567

4️⃣ Update a Book

URL: PUT /books/:id

Request Body (JSON):

{
  "title": "The Great Gatsby (Updated)",
  "publishedYear": 1930
}

5️⃣ Delete a Book

URL: DELETE /books/:id

Response:

{
  "message": "🗑️ Book deleted successfully!"
}

🐟 Environment Variables

This project uses a .env file for configuration. Example:

PORT=3000
MONGO_URI=your_mongodb_connection_string

Ensure .env is added to .gitignore:

echo "# Ignore env file" >> .gitignore
echo ".env" >> .gitignore

📜 License

This project is open-source and free to use.
