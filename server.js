// Core files
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

require('dotenv').config();
global.fetch = require('node-fetch');

// tokenless routes
const cognitoAPI = require('./api/cognito');

// token routes
const usersAPI = require('./api/users');
const companyAPI = require('./api/companies');
const locationsAPI = require('./api/locations');

// middleware
const validateToken = require('./middleware/validateToken');

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

// Tokenless APIs
app.use(cognitoAPI);

// Token APIs
app.use(
  '/api',
  validateToken, [
    usersAPI,
    companyAPI,
    locationsAPI,
  ],
);

db.once('open', () => {
  console.log('-------------------');
  console.log('db open', process.env.APP_NAME);

  io.on('connection', (socket) => {
    console.log('user has connected');

    socket.on('restaurant', (restaurant) => {
      console.log('user has connected to restaurant:', restaurant);
      socket.join(restaurant);
    });
  });

  // let the baby purr
  server.listen({ port: 4000 }, () => {
    console.log('🚀 Server ready at http://localhost:4000');
  });
});
