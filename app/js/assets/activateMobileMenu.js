import $ from "jquery";

export default function activateMobileMenu () {
  $('.header-hamburger').on('click', function handleClick() {
    $(this).toggleClass('is-active');
    $('.header-hamburger-item').toggleClass('is-active');
    $('.menu-links').toggleClass('is-active');
  });
}
