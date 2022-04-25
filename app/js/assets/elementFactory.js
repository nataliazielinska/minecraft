import $ from "jquery";
/**
 * @param arguments
 * @returns {HTMLDivElement | HTMLParagraphElement | HTMLButtonElement}
 */
export default function elementFactory (args) {
  let element = document.createElement(args.tag);
  element.classList.add(args.className);

  args.textNode && element.append(document.createTextNode(args.textNode));
  args.attr && $(element).attr(args.attr, args.attrValue);
  args.event && $(element).on(args.event, args.handler);

  return element;
}
