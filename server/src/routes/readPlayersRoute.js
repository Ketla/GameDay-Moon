const PlayerModel = require('../models/PlayerModel');

module.exports = async (req, res) => {
  const players = await PlayerModel.find();
  res.json(players);
}