const mongoose = require('mongoose');
const { Schema } = mongoose;

const DNASchema = new Schema({
  dna: {
    type: [],
    required: true
  },
  isMutation: {
    type: Boolean,
    required :true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DNA', DNASchema);
