const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;
  const db = mongoose.connect(config.db, {useNewUrlParser: true});
  mongoose.connection
    .on('error', err => {
      console.log('=> could not connect to MongoDB.');
    })
    .on('open', () => {
      console.log('=> connection establised with MongoDB.');
    });
  return db;
};
