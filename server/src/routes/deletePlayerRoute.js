const PlayerModel = require('../models/PlayerModel');

module.exports = async (req, res) => {
  const { id } = req.params;
  
  try {
    // First, find the player by ID to get the name before deletion
    const player = await PlayerModel.findById(id);
    if (!player) {
      return res.status(404).send('Player not found');
    }

    // Then, delete the player
    await PlayerModel.findByIdAndDelete(id);
    
    // Send a response with the player's name indicating successful deletion
    res.send(`${player.name} (${player._id}) has been deleted.`);
  } catch (error) {
    // Handle any errors that might occur
    res.status(500).send(error.message);
  }
};
