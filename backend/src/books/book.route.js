const express = require('express');
const router = express.Router();
const Book = require('./book.model'); // Import du modèle Book
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
//frontend => backend server => controller => book schema =>database =>send data to server => back to the frontend
//post = when submit something frontend to db
//get = when fetch something from db to frontend
//put = when update something from frontend to db
//delete = when delete something from frontend to db



// POST : Ajouter un livre
router.post('/create-book', postABook);
//get all books

router.get("/", getAllBooks);

//get a single book
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteABook)

module.exports = router;
