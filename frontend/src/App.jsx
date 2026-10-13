import { useState, useEffect } from 'react';
import API from '@/services/api';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await API.get('/notes');
      setNotes(response.data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
      setError('Could not connect to the backend server. Is it running?');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      const response = await API.post('/notes', { title, content });
      setNotes([response.data, ...notes]);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Failed to create note:', err);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">Note Keeper MERN</h1>
          <p className="text-slate-400 mt-1">Modular, clean, and powered by your starter template.</p>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-950/50 border border-red-800 text-red-200 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleCreateNote} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-slate-200">Create a New Note</h2>
          <div>
            <input
              type="text"
              placeholder="Note Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Write your note content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Add Note
          </button>
        </form>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-slate-200">Your Notes</h2>
          {loading ? (
            <p className="text-slate-500">Loading notes...</p>
          ) : notes.length === 0 ? (
            <p className="text-slate-500 italic">No notes found. Create your first one above!</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {notes.map((note) => (
                <div key={note._id} className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col justify-between shadow-md">
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">{note.title}</h3>
                    <p className="text-slate-300 text-sm whitespace-pre-wrap">{note.content}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                    <button
                      onClick={() => handleDeleteNote(note._id)}
                      className="text-red-400 hover:text-red-300 font-medium transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}