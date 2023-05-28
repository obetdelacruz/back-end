const express = require("express");
const app = express();
const PORT = 3001;
//shoudl be put first before the end points to work
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

//GET HTTP
app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.status(200).json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const note = notes.find((note) => note.id === id);

  response.status(200).json(note);
});

// DELETE HTTP
app.delete("/api/notes/:id", (request, response) => {
  const id = parseInt(request.params.id);
  note = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

// POST HTTP
app.post("/api/notes", (request, response) => {
  const maxId = notes.length + 1;
  const note = request.body;
  note.id = maxId;
  notes = notes.concat(note);

  response.json(note);
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
