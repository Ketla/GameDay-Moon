const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const createPlayerRoute = require('./routes/createPlayerRoute');
const readPlayersRoute = require('./routes/readPlayersRoute');
const updatePlayerRoute = require('./routes/updatePlayerRoute');
const deletePlayerRoute = require('./routes/deletePlayerRoute');

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/players', isLoggedIn, createPlayerRoute);
router.get('/players', isLoggedIn, readPlayersRoute);
router.put('/players/:id', isLoggedIn, updatePlayerRoute);
router.delete('/players/:id', isLoggedIn, deletePlayerRoute);

module.exports = router;