import config from './client-config';
export default CS1=>{AFRAME.registerComponent('game', {
  schema: {type: 'string'},
  init: function () {
    CS1.game = this;
    var stringToLog = this.data;
    console.log(stringToLog);
    this.hasBegun = false;
    this.config = config;
    document.querySelector('#scene-container').style.display='block';
    document.querySelector('#loading-screen').style.display='none';
  },
  tick: function (time,dt) {
    
  }
});}