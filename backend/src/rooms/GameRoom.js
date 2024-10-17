const { Room } = require('colyseus');

class GameRoom extends Room {
  onCreate() {
    this.setState({ players: {} });

    // When a player joins
    this.onMessage('create_shape', (client, shapeData) => {
      // Extrude the 2D shape to 3D and store in the game state
      this.state.players[client.sessionId] = {
        shape: shapeData.shape,
        position: shapeData.position
      };
      this.broadcast('update_players', this.state.players);
    });

    this.onMessage('move_shape', (client, movementData) => {
      this.state.players[client.sessionId].position = movementData.position;
      this.broadcast('update_players', this.state.players);
    });
  }

  onJoin(client) {
    console.log('Player joined:', client.sessionId);
  }

  onLeave(client) {
    delete this.state.players[client.sessionId];
    this.broadcast('update_players', this.state.players);
  }
}

module.exports = { GameRoom };
