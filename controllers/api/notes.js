const Note = require('../../models/note');

module.exports = {
    create,
  };

async function create(req, res) {
    try {

        // note field is extracted from request.body
        const { note } = req.body;

        // create a new note in the database
        const newNote = await Note.create({ text: note, user: req.user._id });

        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({error: 'Failed to create note'});
    }
}


module.exports = { create };

  