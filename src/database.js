const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://admin:AABBcc22++@cluster0-9lgbj.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
