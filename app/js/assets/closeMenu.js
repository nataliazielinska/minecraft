import $ from "jquery";

export default function closeMenu () {
  $(this).toggleClass('is-active');
  $('.header-hamburger-item').toggleClass('is-active');
  $('.menu').toggleClass('is-active');
  $('.menu-link').removeClass('is-active');
  $('html').toggleClass('activated-menu');
}
