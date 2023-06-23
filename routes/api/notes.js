const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

// GET /api/notes
router.get('/', notesCtrl.index);

// POST /api/users (create a user - sign up)
router.post('/', notesCtrl.create);



module.exports = router;