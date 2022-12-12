export default function appendElements (elements, target) {
  elements.forEach(function (element) {
    target.append(element);
  })
}
