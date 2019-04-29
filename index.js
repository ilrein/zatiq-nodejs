// Core files
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

require('dotenv').config();
global.fetch = require('node-fetch');

// database
mongoose.connect(`mongodb://localhost/${process.env.APP_NAME}`, {
  useNewUrlParser: true,
});

// ignore deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// establish DB connection
const db = mongoose.connection;

// enable json & cors
app.use(bodyParser.json());
app.use(cors());

// obligatory hello world :)
app.get('/', (req, res) => res.json({
  data: 'hello world!',
}));

const listNotes = require('./api/notes/list');
const createNote = require('./api/notes/create');
const deleteNote = require('./api/notes/remove');

db.once('open', () => {
  console.log('-------------------');
  console.log('db open', process.env.APP_NAME);

  io.on('connection', (socket) => {
    console.log('user has connected');

    socket.on('room', (room) => {
      console.log('user has connected to room:', room);
      socket.join(room);
    });

    socket.on('get-notes', (getNoteData) => {
      listNotes(io, getNoteData);
    });

    socket.on('submit-note', (noteData) => {
      createNote(io, noteData);
    });

    socket.on('delete-note', (noteData) => {
      deleteNote(io, noteData);
    });
  });

  // let the baby purr
  server.listen({ port: 4000 }, () => {
    console.log('🚀 Server ready at http://localhost:4000');
  });
});
