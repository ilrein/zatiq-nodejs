// Core files
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const dayjs = require('dayjs');

// package.json
const pkg = require('./package.json');

require('dotenv').config();
global.fetch = require('node-fetch');

// tokenless routes
const cognitoAPI = require('./api/auth');

// token routes
const usersAPI = require('./api/users');
const restaurantAPI = require('./api/restaurants');
const dishesAPI = require('./api/dishes');
const menusAPI = require('./api/menus');

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
  data: pkg.version,
}));

// Tokenless APIs
app.use(cognitoAPI);

// Token APIs
app.use(
  '/api',
  validateToken, [
    usersAPI,
    restaurantAPI,
    dishesAPI,
    menusAPI,
  ],
);

db.once('open', () => {
  console.log('-------------------');
  console.log('MongoDB connected:', process.env.APP_NAME);

  // io.on('connection', (socket) => {
  //   console.log('user has connected');

  //   socket.on('restaurant', (restaurant) => {
  //     console.log('user has connected to restaurant:', restaurant);
  //     socket.join(restaurant);
  //   });
  // });

  // let the baby purr
  server.listen({ port: 4000 }, () => {
    console.log('Time', dayjs().format('h:mm A'));
    console.log('Version', pkg.version);
    console.log('🚀 Server ready at http://localhost:4000');
  });
});
