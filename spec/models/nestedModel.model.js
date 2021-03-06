const mongoose = require('mongoose');

delete mongoose.models.NestedModel;

module.exports = mongoose.model('NestedModel', new mongoose.Schema({
  string: String,
  number: Number,
  date: Date,
  boolean: Boolean,
  child: {
    string: String,
    number: Number,
    date: Date,
    boolean: Boolean,
    child: {
      string: String,
      number: Number,
      date: Date,
      boolean: Boolean
    }
  }
}, {
  timestamps: true,
}));