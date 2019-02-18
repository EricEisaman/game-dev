export default CS1=>{
  let socket = CS1.socket = io();
  socket.on('connect',()=>{
    console.log(`socket connected with id: ${socket.id}`);
    console.log('Client.js can initialize my playerData now.');
    socket.playerData = {position:{},rotation:{},faceIndex:0};
    socket.lastPlayerData = {position:{},rotation:{},faceIndex:0};
  });
}