const express = require('express');
const { Server } = require('colyseus');
const { createServer } = require('http');
const { GameRoom } = require('./rooms/GameRoom');

const port = 3000;
const app = express();

const httpServer = createServer(app);
const gameServer = new Server({
  server: httpServer
});

gameServer.define('game_room', GameRoom);

httpServer.listen(port, () => {
  console.log(`Game server running on http://localhost:${port}`);
});
