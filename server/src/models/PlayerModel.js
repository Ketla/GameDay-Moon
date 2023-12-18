const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 1000,
  },
  afk: {
    type: Boolean,
    default: false,
  },
  totalScore: {
    type: Number,
  },
  totalGoals: {
    type: Number,
  },
  totalAssists: {
    type: Number,
  },
  totalCleanSheets: {
    type: Number,
  },
  totalMatchesPlayed: {
    type: Number,
  },
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
