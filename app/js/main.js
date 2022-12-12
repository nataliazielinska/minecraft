import activateMenu from './assets/activateMenu.js';
import generateMenu from './assets/generateMenu.js';
import showStartScreen from './assets/showStartScreen.js';
import {dataTags} from "./assets/dataTags";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(dataTags.headerContent).append(generateMenu());
  showStartScreen();
  document.querySelector(dataTags.imageLogo).addEventListener('click', showStartScreen);
  activateMenu ();
});
