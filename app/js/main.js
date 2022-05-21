import $ from 'jquery';
import activateMobileMenu from './assets/activateMobileMenu.js';
import generateMenu from './assets/generateMenu.js';
import showStartScreen from './assets/showStartScreen.js';

$( document ).ready(function() {
  $('.header.content').append(generateMenu());
  showStartScreen();
  $('.logo-misja').click(showStartScreen);
  activateMobileMenu ();
});


