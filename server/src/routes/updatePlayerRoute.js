const PlayerModel = require('../models/PlayerModel');

module.exports = async (req, res) => {
  const { id } = req.params; // Make sure to use req.params to access URL parameters
  const player = await PlayerModel.findById(id);

  if (player) {
    // Use Object.assign to merge changes from req.body into the player object
    Object.assign(player, req.body);

    // Save the updated player object to the database
    await player.save();

    // Respond with the updated player
    res.json(player);
  } else {
    // Handle the case where player is not found
    res.status(404).send('Player not found');
  }
};
