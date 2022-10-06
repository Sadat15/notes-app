const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })
  it('adds 2 new notes to the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go the the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go the the gym']);
  })
  it('resets the notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go the the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})