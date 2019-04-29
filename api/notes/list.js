const Note = require('./note');

const list = (io, data) => {
  const { meta } = data;
  const { userId, page } = meta;

  Note.paginate(
    {
      userId,
    },
    {
      limit: 10,
      page: page || 1,
      sort: 'desc'
    },
  )
    .then(data => {
      io.in(userId).emit('list-notes', data);
    })
    .catch(err => {
      console.log(err);
    });
};


module.exports = list;
