import {cssClasses} from "./cssClasses";
import {dataTags} from "./dataTags";
import {tags} from "./tags";

export default function closeMenu () {
  document.querySelector(dataTags.headerHamburgerItem)?.classList.toggle(cssClasses.isActive);
  document.querySelector(dataTags.menu)?.classList.toggle(cssClasses.isActive);
  document.querySelector(dataTags.menuLink)?.classList.remove(cssClasses.isActive);
  document.querySelector(tags.html)?.classList.toggle(cssClasses.activatedMenu);
}
