import $ from 'jquery';
import activateCommandsBlock from './activateCommandsBlock.js';
import appendElements from './appendElements.js';
import elementFactory from './elementFactory.js';
import lessonLinksVisibilitySwitcher from "./lessonLinksVisibilitySwitcher";
import generateCommandsBlock from "./generateCommandsBlock";

/**
 *
 * @param e
 */
export default function generateLessons (e) {
  const thisYear = e.currentTarget.dataset.year;
  let thisLessons = [];

  $('.start-screen-container').replaceWith(elementFactory({tag: 'div', className: ['lessons', 'boxes-container']}));

  lessons.forEach(function (item){
    if (item.year == thisYear)
      thisLessons.push(item);
    else if (thisYear == 'all')
      thisLessons = [...lessons]
  });

  thisLessons.forEach(function (item, index) {
    let lessonHeaderItems = [];
    let lessonItems = [];
    const thisLessonHeader = elementFactory({tag: 'div', className: ['lesson-header', 'box-header']});
    const thisLessonContent = elementFactory({tag: 'div', className: ['lesson-content', 'box-content']});
    const thisLessonLinks = elementFactory({tag: 'div', className: ['lesson-links']});
    let thisLesson;

    if (!item.name) {
      thisLesson = elementFactory({tag: 'div', className: ['lesson-error', 'lesson-name-error'], textNode: 'Błąd w pakiecie: Brak nazwy lekcji!'});
    } else {
      thisLesson = elementFactory({tag: 'div', className: ['lesson', 'box-container'], attr: [{'data-lesson-name': item.name}]});
      if (item.year == thisYear) lessonHeaderItems.push(elementFactory({
        tag: 'p',
        className: ['lesson-name', 'lesson-header-item', 'box-header-item'],
        textNode: `Lekcja ${index + 1}`
      }));

      if (!item.title) {
        lessonHeaderItems.push(elementFactory({
          tag: 'p',
          className: ['lesson-error', 'lesson-title-error'],
          textNode: 'Błąd w pakiecie: Brak tytułu lekcji!'
        }));
      } else {
        lessonHeaderItems.push(elementFactory({
          tag: 'p',
          className: ['lesson-title', 'lesson-header-item', 'box-header-item'],
          textNode: item.title
        }));
      }
      lessonItems.push(elementFactory({
        tag: 'a',
        className: ['lesson-world', 'lesson-item'],
        textNode: 'Świat',
        attr: [{'href': './lekcje/' + item.name + '.mcworld'}]
      }));
      lessonItems.push(elementFactory({
        tag: 'a',
        className: ['lesson-programs', 'lesson-item'],
        textNode: 'Lekcja z gotowym programem',
        attr: [{'href': './lekcje/' + item.name + '-gotowy.mcworld'}]
      }));
      lessonItems.push(elementFactory({
        tag: 'a',
        className: ['lesson-syllabus', 'lesson-item'],
        textNode: 'Konspekt',
        attr: [{'href': `./lekcje/${item.name}-konspekt.pdf`}, {'target': '_blank'}],
      }));
      lessonItems.push(elementFactory({
        tag: 'a',
        className: ['lesson-chit', 'lesson-item'],
        textNode: "Karteczka",
        attr: [{'href': './lekcje/' + item.name + '.pdf'}, {'target': '_blank'}]
      }));
      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['lesson-commands', 'lesson-item'],
        textNode: 'Komendy',
        event: 'click',
        handler: activateCommandsBlock
      }));
      lessonItems.push(generateCommandsBlock(item.commands));
      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['lesson-sticker', 'lesson-item'],
        textNode: 'Wlepa',
        event: 'click',
        handler: function (e) {
          $(this).parent().siblings('.sticker-image-container').toggleClass('is-active');
        }
      }));
      appendElements(lessonHeaderItems, thisLessonHeader);
      appendElements(lessonItems, thisLessonLinks);
      $(thisLessonLinks).append(elementFactory({
        tag: 'span',
        className: ['lesson-links-close', 'close-sign'],
        event: 'click',
        handler: function () {
          $(this).parent('.lesson-links').toggleClass('is-active')
        }
      }));
      $(thisLesson).append(thisLessonHeader);
      $(thisLessonContent).append(thisLessonLinks);
      let stickerContainer = elementFactory({
        tag: 'div',
        className: ['sticker-image-container'],
        event: 'click',
        handler: function (e) {
          e.stopPropagation();
        }
      });
      let stickerHolder = elementFactory({tag: 'div', className: ['sticker-image-holder']});
      $(stickerHolder).append(elementFactory({
        tag: 'img',
        className: ['sticker-image', 'lesson-image'],
        attr: [{'src': './lekcje/' + item.name + '-wlepa.png'}]
      }));
      $(stickerHolder).append(elementFactory({
        tag: 'span',
        className: ['sticker-holder-close', 'close-sign'],
        event: 'click',
        handler: function () {
          $(this).parents('.sticker-image-container').toggleClass('is-active');

        }
      }));
      $(stickerContainer).append(stickerHolder);
      $(thisLessonContent).append(stickerContainer);
      $(thisLessonContent).append(elementFactory({
        tag: 'img',
        className: ['lesson-image'],
        attr: [{'src': './lekcje/' + item.name + '.png'}]
      }));
      $(thisLesson).append(thisLessonContent);
    }
    $('.lessons').append(thisLesson);
  });
  lessonLinksVisibilitySwitcher();
}
