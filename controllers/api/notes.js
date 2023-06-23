const Note = require('../../models/note');

module.exports = {
    index,
    create,
  };



async function index(req, res) {
    try {
        const notes = await Note.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve note'});
    }

}

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
