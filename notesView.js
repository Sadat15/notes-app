class NotesView {
  constructor (model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector("#main-container");
  
    this.addButtonEl = document.querySelector('#add-button');

    this.addButtonEl.addEventListener('click', () => {
      this.resetNotes();
      this.addNewNote();
      this.resetInputBox();
      this.displayNotes();
    })
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach(element => {
      let div = document.createElement('div');
      div.textContent = element;
      div.className = 'note';
      this.mainContainerEl.append(div);
    })
  }

  addNewNote() {
    const newNote = document.querySelector('#noteId');
    this.model.addNote(newNote.value);
  }

  resetNotes() {
    const notes = document.querySelectorAll('div.note');
    notes.forEach(note => note.remove());
  }

  resetInputBox() {
    const inputBox = document.querySelector('#noteId');
    inputBox.value = "";
  }

}

module.exports = NotesView;