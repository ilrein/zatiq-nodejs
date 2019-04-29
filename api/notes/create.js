const Note = require('./note');

const create = (io, data) => {
  const { userId, note } = data;
  const { content, status } = note;

  const newNote = new Note({
    userId,
    content,
    status,

    createdOn: Date.now(),
    updatedOn: Date.now(),
  });

  newNote.save((err, result) => {
    if (err) {
      console.log(err);
      // io.emit('create-note', err);
    } else {
      console.log('Saving new note', result._id);
      io.in(userId).emit('note-created', result);
    }
  });
};

module.exports = create;
