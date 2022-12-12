import menuItems from "./menuItems";
import elementFactory from './elementFactory';
import closeMenu from "./closeMenu";
import {tags} from "./tags";
import {cssClasses} from "./cssClasses";

export default function generateMenu () {

  const menu = elementFactory({
    tag: tags.div,
    className: [cssClasses.header, cssClasses.menu],
    attr: [{'data-container':'menu'}]});
  const menuLinks = elementFactory({tag: tags.ul, className: [cssClasses.menuLinks]});

  menuItems && menuItems.forEach(function (item, index) {
    const menuLink = elementFactory({
      tag: tags.li,
      className: [cssClasses.menuLink],
      attr: [{'data-container':'menu-link'}],
      event: 'click',
      handler: function () {
        this?.classList.toggle(cssClasses.isActive);
      }
    });
    item.title && menuLink.append(elementFactory({tag: tags.span, textNode: item.title}));

    const menuSublinks = elementFactory({tag: tags.ul, className: [cssClasses.menuSublinks]});
    item.headerSubitems && item.headerSubitems.forEach(function (subItem) {
      const menuSubitem = elementFactory({tag: tags.li, className: [cssClasses.menuSublink]});
      subItem.linkName && menuSubitem.append(elementFactory({
        tag: tags.a,
        textNode: subItem.linkName,
        attr: [{'href': subItem.link}, {'target': '_blank'}]}));
      menuSublinks.append(menuSubitem);
    });

    menuLink.append(menuSublinks);
    menuLinks.append(menuLink);
  });
  menu.append(menuLinks);

  menu.append(elementFactory({
    tag: tags.div,
    className: [cssClasses.menuShadow],
    event: 'click',
    handler: closeMenu
  }));
  return menu;
}
