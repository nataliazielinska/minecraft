import $ from "jquery";
import elementFactory from './elementFactory.js';
/**
 *
 * @param e
 */
export default function generateLessons (e) {
  const thisYear = e.currentTarget.dataset.year;
  let thisLessons = [];

  $('.start-screen-container').replaceWith(elementFactory({tag: 'div', className: 'this-lessons'}));

  lessons.forEach(function (item){
    if (item.year == thisYear)
      thisLessons.push(item);
    else if (thisYear == 'all')
      thisLessons = lessons.slice(0);
      // thisLessons = [...lessons]
  });

  /**
   * Appends element to desired tag
   * @param element
   * @param target
   */
  const appendElements = (element, target) => {
    element.forEach(function (item) {
      $(target).append(item);
    })
  }

  const activateSticker = () => {
    console.log('wlepa');
  }

  thisLessons.forEach(function (item) {
    let lessonItems = [];
    const thisLesson = elementFactory({tag: 'div', className: 'lesson', attr: 'data-lesson-name', attrValue: item.name});
    lessonItems.push(elementFactory({tag: 'p', className: 'lesson-title', textNode: item.title}));
    lessonItems.push(elementFactory({
      tag: 'a',
      className: 'lesson-syllabus',
      textNode: 'Konspekt',
      event: 'click',
      handler: activateSticker,
      attr: 'href',
      attrValue: item.syllabus,
    }));
    lessonItems.push(elementFactory({
      tag: 'button',
      className: 'lesson-programs',
      textNode: "Programy",
      event: 'click',
      handler: activateSticker
    }));
    lessonItems.push(elementFactory({tag: 'button', className: 'lesson-commands', textNode: 'Komendy', event:'click', handler: activateSticker}));
    lessonItems.push(elementFactory({tag: 'button', className: 'lesson-sticker', textNode: 'Wlepa', event: 'click', handler: activateSticker}));
    appendElements(lessonItems, thisLesson);
    $('.this-lessons').append(thisLesson);
  });
  console.log(thisLessons);
}
