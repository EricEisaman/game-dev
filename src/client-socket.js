export default CS1=>{
  let socket = CS1.socket = io();
  socket.on('connect',()=>{
    console.log(`socket connected with id: ${socket.id}`);
    console.log('Client.js can initialize my playerData now.');
    socket.playerData = {position:{},rotation:{},faceIndex:0};
    socket.lastPlayerData = {position:{},rotation:{},faceIndex:0};
    
    CS1.game.login = (un,pw)=>{
      socket.emit('login',{name:un,pw:pw});
    }
    socket.on('login-results',data=>{
      console.log(data);
      if(data.success) document.querySelector('#login').style.zIndex = -1;
      else document.getElementById('login-msg').innerHTML = data.msg;
    });
    
  });
}