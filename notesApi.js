class NotesApi {
  loadNotes(callback) {
    const url = 'http://localhost:3000/notes';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        console.log("callback data", callback(data));
        callback(data);
      })
  }
}

// const api = new NotesApi;
// api.loadNotes((response) => {return response});
module.exports = NotesApi;
