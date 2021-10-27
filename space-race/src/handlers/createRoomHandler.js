import { socket } from "../App";

export const createRoomHandler = (e, username, socketId) => {
  const settings = e.target;
  e.preventDefault();
  const roomSettings = {
    socketId: socketId,
    admin: username,
    category: settings[0].value,
    difficulty: settings[1].value
  };

  console.log(roomSettings);

  socket.emit("create room", roomSettings);
  return roomSettings;
};