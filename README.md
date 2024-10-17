Project Overview
---------------------------
This project is a multiplayer game built using Node.js, Angular, BabylonJS, and Colyseus. The goal is to allow players to:

        Draw 2D shapes in the game.
        Extrude the 2D shapes into 3D objects with a fixed height.
        Move the 3D objects around in a shared environment.
        See the shapes and movements of other players in real time.


Features
-------------------------
           Real-time multiplayer: Using Colyseus, all players can see each other's shapes and movements instantly.
           3D environment: The game utilizes BabylonJS to render and manipulate 3D objects in a browser.
           Shape extrusion: Players can create 2D shapes and extrude them into 3D objects.
           Movement: Players can move the extruded 3D objects in the shared space, and the updates are synced in real-time with other connected users.

Thought Process and Solution Breakdown
------------------------------------------
     1. Real-time Multiplayer with Colyseus
        -------------------------------------
        Colyseus was chosen as the real-time multiplayer framework because it allows seamless state synchronization between players in a game room. Each player connects to a room where their actions, like creating shapes or moving them, are broadcast to all other players.
        GameRoom.js: This file handles the game logic. It listens for messages like 'create_shape' and 'move_shape' from connected clients. It updates the shared state and broadcasts updates to all clients in the room.
    2. 3D Rendering with BabylonJS
     ------------------------------
        BabylonJS is used for rendering the game world and shapes in 3D. It provides an easy API to create 3D objects like cubes, spheres, and custom meshes.
         game.component.ts: This Angular component initializes a BabylonJS scene where players can draw 2D shapes and extrude them into 3D objects. A basic ground plane is added where objects can be moved.
    3. Shape Creation and Movement
      -----------------------------
        Players can draw 2D shapes and extrude them into 3D objects. For simplicity, in this version, we use cubes as the 3D objects, but this can be expanded to support more complex shapes.
        The positions of these objects can be updated in real time by sending movement data to the Colyseus server, which is then synchronized across all connected clients.
    4. Angular as the Frontend Framework
    ------------------------------------
       Angular was chosen for its component-based architecture and ease of integrating services for Colyseus. The frontend handles the BabylonJS rendering logic as well as the communication with the Colyseus server.
       game.service.ts: This service manages the WebSocket connection to the Colyseus server. It sends messages when a shape is created or moved and receives updates from other players.


Running the Project
-------------------
Backend
--------
Navigate to the /backend directory.
Install the required dependencies:

npm install

Run the Colyseus server:

node src/server.js

Frontend
----------
Navigate to the /frontend directory.
Install the Angular dependencies:

npm install

Run the Angular development server:

ng serve
