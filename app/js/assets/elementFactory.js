import $ from 'jquery';

/**
 * @param arguments
 * @returns {HTMLDivElement | HTMLParagraphElement | HTMLButtonElement}
 */
export default function elementFactory (args) {
  let element = document.createElement(args.tag);

  args.className && element.classList.add(...args.className);

  args.textNode && element.append(document.createTextNode(args.textNode));

  args.event && $(element).on(args.event, args.handler);

  if(args.attr && args.attr.length) {
    args.attr.forEach((arrayElement) =>
      $(element).attr(Object.keys(arrayElement).toString(), Object.values(arrayElement).toString())
    )
  }

  return element;
}
