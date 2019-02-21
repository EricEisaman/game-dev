let CS1 = window.CS1 = {};
import loadSpinner from './load-spinner';
import './load-spinner.css';
import grabbable from './grabbable';
import navpointer from './nav-pointer';
import shaderfrog from './shader-frog';
import hud from './hud';
import './hud.css';
hud(CS1);
import game from './game';
game(CS1);
import socket from './client-socket';
socket(CS1);
import './main.css';
import login from './login';
import './login.css';

console.log("FIRING UP THE MAINS!");

  

  