import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

// @desc    Get all notes
// @route   GET /api/notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a new note
// @route   POST /api/notes
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a note
// @route   DELETE /api/notes/:id
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    await note.deleteOne();
    res.json({ message: 'Note removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;