const Note = require('./note');

const remove = (io, noteData) => {
  const { userId, noteId } = noteData;
  Note.findByIdAndRemove(noteId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleting note', result._id);
      io.in(userId).emit('note-deleted', result);
    }
  });
};

module.exports = remove;
