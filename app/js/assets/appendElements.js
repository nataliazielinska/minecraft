import $ from 'jquery';

/**
 * Appends element to desired tag
 * @param element
 * @param target
 */
export default function appendElements (element, target) {
  element.forEach(function (item) {
    $(target).append(item);
  })
}
