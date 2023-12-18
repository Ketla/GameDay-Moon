const PlayerModel = require('../models/PlayerModel');

module.exports = async (req, res) => {
  const { name } = req.body;

  // Create a new player instance with the required fields
  const player = new PlayerModel({
    name, // Assuming 'name' is the only required field from req.body
  });

  try {
    // Save the new player to the database
    const newPlayer = await player.save();

    // Send back the newly created player
    res.json(newPlayer);
  } catch (error) {
    // Handle any errors that might occur during saving
    res.status(500).send(error);
  }
};
