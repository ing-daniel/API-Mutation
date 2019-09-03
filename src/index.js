const express = require('express');
const cors = require('cors');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./routes/mutation'));

// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
