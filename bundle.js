(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButtonEl = document.querySelector("#add-button");
          this.addButtonEl.addEventListener("click", () => {
            this.resetNotes();
            this.addNewNote();
            this.resetInputBox();
            this.displayNotes();
          });
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((element) => {
            let div = document.createElement("div");
            div.textContent = element;
            div.className = "note";
            this.mainContainerEl.append(div);
          });
        }
        addNewNote() {
          const newNote = document.querySelector("#noteId");
          this.model.addNote(newNote.value);
        }
        resetNotes() {
          const notes = document.querySelectorAll("div.note");
          notes.forEach((note) => note.remove());
        }
        resetInputBox() {
          const inputBox = document.querySelector("#noteId");
          inputBox.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  console.log("The notes app is running");
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var notesView = new NotesView(model);
  notesView.displayNotes();
})();
