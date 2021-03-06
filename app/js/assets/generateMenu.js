import menuItems from "./menuItems";
import $ from 'jquery';
import elementFactory from './elementFactory';
import closeMenu from "./closeMenu";

export default function generateMenu () {

  let menu = elementFactory({tag: 'div', className: ['header', 'menu']});
  let menuLinks = elementFactory({tag: 'ul', className: ['menu-links']});

  menuItems && menuItems.forEach(function (item, index) {
    let menuLink = elementFactory({
      tag: 'li',
      className: ['menu-link'],
      event: 'click',
      handler: function () {
        $(this).toggleClass('is-active');
      }
    });
    item.title && $(menuLink).append(elementFactory({tag: 'span', textNode: item.title}));

    let menuSublinks = elementFactory({tag: 'ul', className: ['menu-sublinks']});
    item.headerSubitems && item.headerSubitems.forEach(function (subItem) {
      let menuSubitem = elementFactory({tag: 'li', className: ['menu-sublink']});
      subItem.linkName && $(menuSubitem).append(elementFactory({tag: 'a', textNode: subItem.linkName, attr: [{'href': subItem.link}, {'target': '_blank'}]}));
      $(menuSublinks).append(menuSubitem);
    });

    $(menuLink).append(menuSublinks);
    $(menuLinks).append(menuLink);
  });
  $(menu).append(menuLinks);

  $(menu).append(elementFactory({
    tag: 'div',
    className: ['menu-shadow'],
    event: 'click',
    handler: closeMenu
  }));
  return menu;
}

function closeSubmenus () {
    $('.menu-sublinks.is-active').removeClass('is-active');
    $(window).off('click', windowClickHandler);
}

function windowClickHandler (event) {
  !$(event.target).parents('.menu-link').length && closeSubmenus();
}
