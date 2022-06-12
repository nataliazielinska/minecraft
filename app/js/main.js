import $ from 'jquery';
import activateMenu from './assets/activateMenu.js';
import generateMenu from './assets/generateMenu.js';
import showStartScreen from './assets/showStartScreen.js';

$( document ).ready(function() {
  $('.header.content').append(generateMenu());
  showStartScreen();
  $('.logo-misja').click(showStartScreen);
  activateMenu ();
});
