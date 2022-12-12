export default function elementFactory (args) {
  const element = document.createElement(args.tag);

  args.className && element.classList.add(...args.className);

  args.textNode && element.append(document.createTextNode(args.textNode));

  args.event && element.addEventListener(args.event, args.handler);

  if(args.attr && args.attr.length) {
    args.attr.forEach((arrayElement) =>
      element.setAttribute(Object.keys(arrayElement).toString(), Object.values(arrayElement).toString())
    )
  }

  return element;
}
