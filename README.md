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

<h3>Clone the repository</h3>

git clone https://github.com/yourusername/book-api.git
cd book-api

<h3>Install dependencies</h3>

npm install

<h3>Set up environment variablesCreate a .env file and add:</h3>

PORT=3000
MONGO_URI=your_mongodb_connection_string

<h3>Start the server</h3>

npm start

OR if using nodemon:

npm run dev



<h1>🐟 Environment Variables</h1>

<p>This project uses a .env file for configuration. Example:</p>

PORT=3000
MONGO_URI=your_mongodb_connection_string

<p>Ensure .env is added to .gitignore:</p>

echo "# Ignore env file" >> .gitignore
echo ".env" >> .gitignore

<h1>📜 License</h1>

This project is open-source and free to use.
