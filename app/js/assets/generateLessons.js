import $ from 'jquery';
import activateCommandsBlock from './activateCommandsBlock.js';
import activateDownloads from './activateDownloads.js';
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
    let lessonDownloads = [];
    const thisLessonHeader = elementFactory({tag: 'div', className: ['lesson-header', 'box-header']});
    const thisLessonContent = elementFactory({tag: 'div', className: ['lesson-content', 'box-content']});
    const thisLessonLinks = elementFactory({tag: 'div', className: ['lesson-links']});
    const thisLessonDownloads = elementFactory({tag: 'div', className: ['lesson-downloads']});
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
      appendElements(lessonHeaderItems, thisLessonHeader);
      let smallImageContainer = elementFactory({tag: 'div', className: ['small-image-container', 'lesson-item']});
      smallImageContainer.append(elementFactory({tag: 'img',
        className: ['lesson-image'],
        attr: [{'src': './lekcje/' + item.name + '-mini.png'}]}));
      lessonItems.push(smallImageContainer);
      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['button-primary', 'lesson-downloads-button', 'lesson-item'],
        textNode: "Do pobrania",
        event: 'click',
        handler: activateDownloads
      }));
      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['button-primary', 'lesson-commands', 'lesson-item'],
        textNode: 'Komendy',
        event: 'click',
        handler: activateCommandsBlock
      }));
      lessonItems.push(generateCommandsBlock(item.commands));
      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['button-primary', 'lesson-sticker', 'lesson-item'],
        textNode: 'Wlepa',
        event: 'click',
        handler: function (e) {
          $(this).parent().siblings('.sticker-image-container').toggleClass('is-active');
        }
      }));
      appendElements(lessonItems, thisLessonLinks);
      $(thisLessonLinks).append(elementFactory({
        tag: 'span',
        className: ['lesson-links-close', 'close-sign'],
        event: 'click',
        handler: function () {
          $(this).parent('.lesson-links').toggleClass('is-active');
          $(this).parents('.lesson-links').siblings('.lesson-image').toggleClass('activated-links');
        }
      }));
      smallImageContainer = elementFactory({tag: 'div', className: ['small-image-container', 'lesson-item']});
      smallImageContainer.append(elementFactory({tag: 'img',
        className: ['lesson-image'],
        attr: [{'src': '././img/download-arrow.png'}]}));
      lessonDownloads.push(smallImageContainer);
      lessonDownloads.push(elementFactory({
        tag: 'a',
        className: ['button-primary', 'lesson-world', 'lesson-item'],
        textNode: 'Świat',
        attr: [{'href': './lekcje/' + item.name + '.mcworld'}]
      }));
      lessonDownloads.push(elementFactory({
        tag: 'a',
        className: ['button-primary', 'lesson-syllabus', 'lesson-item'],
        textNode: 'Konspekt',
        attr: [{'href': `./lekcje/${item.name}-konspekt.pdf`}, {'target': '_blank'}],
      }));
      lessonDownloads.push(elementFactory({
        tag: 'a',
        className: ['button-primary', 'lesson-chit', 'lesson-item'],
        textNode: "Karteczka",
        attr: [{'href': './lekcje/' + item.name + '.pdf'}, {'target': '_blank'}]
      }));
      appendElements(lessonDownloads, thisLessonDownloads);

      $(thisLessonDownloads).append(elementFactory({
        tag: 'span',
        className: ['lesson-downloads-close', 'close-sign'],
        event: 'click',
        handler: function () {
          $(this).parent('.lesson-downloads').toggleClass('is-active');
          $(this).parents('.lesson-downloads').siblings('.lesson-links').addClass('is-active');
        }
      }));
      $(thisLesson).append(thisLessonHeader);
      $(thisLessonContent).append(thisLessonLinks);
      $(thisLessonContent).append(thisLessonDownloads);
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
