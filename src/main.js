let CS1 = window.CS1 = {};
import grabbable from './grabbable';
import navpointer from "./nav-pointer";
import shaderfrog from "./shader-frog";
import game from "./game";
game(CS1);
import socket from './client-socket';
socket(CS1);
import './main.css';
import loadSpinner from "./load-spinner";
import './load-spinner.css';

console.log("FIRING UP THE MAINS!");

  

  