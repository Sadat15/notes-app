/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Page view', () => {
  it('displays notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });
  it('adds a new note to the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
   
    const model = new NotesModel();
    const view = new NotesView(model);

    const note_1 = document.querySelector('#noteId');

    note_1.value = "test";

    const addButtonEl = document.querySelector('#add-button');
    addButtonEl.click();

    expect(document.querySelector('div.note')).not.toBeNull();

  })
  it('removes the older notes when new note is added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const addButtonEl = document.querySelector('#add-button');

    const inputBox = document.querySelector('#noteId');
    inputBox.value = 'one';
    addButtonEl.click();
    inputBox.value = 'two';
    addButtonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
  it('returns the notes from the api', () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');

    const api = new NotesApi();
    const model = new NotesModel();
    const view = new NotesView(model, api);

    fetch.mockResponseOnce(JSON.stringify({
      arr: ["This note is coming from the server"]
    }));
    
    // api.loadNotes((returnedDataFromApi) => {
    //   expect(returnedDataFromApi.arr).toEqual(["This note is coming from the server"]);
    // });


    // const notes = api.loadNotes((returnedDataFromApi) => {console.log(returnedDataFromApi.arr)});

    // const notes = api.loadNotes((returnedDataFromApi) => {return returnedDataFromApi.arr});
    console.log(
      api.loadNotes(
        (returnedDataFromApi) => {
          setTimeout(
            (returnedDataFromApi) => {
              return returnedDataFromApi.arr
            }, 5000
          )
        }
      )
    );
    // console.log("test", notes);
    // model.setNotes(notes);

    // view.displayNotes();

    // expect(document.querySelectorAll('div.note').length).toEqual(1);

  });
});