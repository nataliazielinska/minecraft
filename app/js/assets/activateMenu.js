import closeMenu from './closeMenu';
import {dataTags} from "./dataTags";

export default function activateMenu () {
  document.querySelector(dataTags.headerHamburger).addEventListener('click', closeMenu);
}
