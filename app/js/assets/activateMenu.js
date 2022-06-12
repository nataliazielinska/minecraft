import $ from 'jquery';
import closeMenu from './closeMenu';

export default function activateMenu () {
  $('.header-hamburger').on('click', function handleClick() {
    closeMenu();
  });
}
