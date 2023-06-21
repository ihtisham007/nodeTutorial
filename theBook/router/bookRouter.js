const router = require('express').Router();
const bookController = require("../Controllers/bookController");


router
    .route('/')
    .get(bookController.getBook)


module.exports = router



