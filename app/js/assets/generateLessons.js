import activateCommandsBlock from './activateCommandsBlock.js';
import activateDownloads from './activateDownloads.js';
import appendElements from './appendElements.js';
import elementFactory from './elementFactory.js';
import lessonLinksVisibilitySwitcher from "./lessonLinksVisibilitySwitcher";
import generateCommandsBlock from "./generateCommandsBlock";
import {cssClasses} from "./cssClasses";
import {tags} from "./tags";
import {dataTags} from "./dataTags";

export default function generateLessons (e) {
  const thisYear = e.currentTarget.dataset.year;
  let thisLessons = [];

  const classStartScreenContainerElement = document.getElementsByClassName(cssClasses.startScreenContainer)[0];
  classStartScreenContainerElement.replaceWith(elementFactory({
    tag: tags.div,
    className: [cssClasses.lessons, cssClasses.boxesContainer],
    attr: [{'data-container':'lessons'}]
  }));

  if (thisYear == 'all') {
    thisLessons = [...lessons]
  } else {
    thisLessons = lessons.filter(item => item.year == thisYear)
  }

  thisLessons.forEach(function (item, index) {
    const lessonHeaderItems = [];
    const lessonItems = [];
    const lessonDownloads = [];
    const thisLessonHeader = elementFactory({
      tag: tags.div,
      className: [cssClasses.lessonHeader,
        cssClasses.boxHeader]
    });
    const thisLessonContent = elementFactory({
      tag: tags.div,
      className: [cssClasses.lessonContent, cssClasses.boxContent],
      attr: [{'data-container':'lesson-content'}]
    });
    const thisLessonLinks = elementFactory({
      tag: tags.div,
      className: [cssClasses.lessonLinks],
      attr: [{'data-container':'lesson-links'}]
    });
    const thisLessonDownloads = elementFactory({
      tag: tags.div,
      className: [cssClasses.lessonDownloads],
      attr: [{'data-container':'lesson-downloads'}]
    });
    let thisLesson;

    if (!item.name) {
      thisLesson = elementFactory({
        tag: tags.div,
        className: [cssClasses.lessonError, cssClasses.lessonNameError],
        textNode: 'Błąd w pakiecie: Brak nazwy lekcji!'
      });
    } else {
      thisLesson = elementFactory({
        tag: tags.div,
        className: [cssClasses.lesson, cssClasses.boxContainer],
        attr: [{'data-lesson-name': item.name}]
      });
      if (item.year == thisYear) lessonHeaderItems.push(elementFactory({
        tag: tags.p,
        className: [cssClasses.lessonName, cssClasses.lessonHeaderItem, cssClasses.boxHeaderItem],
        textNode: `Lekcja ${index + 1}`
      }));

      if (!item.title) {
        lessonHeaderItems.push(elementFactory({
          tag: tags.p,
          className: [cssClasses.lessonError, cssClasses.lessonTitleError],
          textNode: 'Błąd w pakiecie: Brak tytułu lekcji!'
        }));
      } else {
        lessonHeaderItems.push(elementFactory({
          tag: tags.p,
          className: [cssClasses.lessonTitle, cssClasses.lessonHeaderItem, cssClasses.boxHeaderItem],
          textNode: item.title
        }));
      }
      appendElements(lessonHeaderItems, thisLessonHeader);

      let smallImageContainer = elementFactory({
        tag: tags.div,
        className: [cssClasses.smallImageContainer, cssClasses.lessonItem]
      });
      smallImageContainer.append(elementFactory({
        tag: tags.img,
        className: [cssClasses.lessonImage],
        attr: [{'src': './img/intro.png'}, {'data-image': 'intro-book'}]}));
      lessonItems.push(smallImageContainer);

      lessonItems.push(elementFactory({
        tag: 'button',
        className: ['button-primary', 'lesson-downloads-button', 'lesson-item'],
        textNode: "Do pobrania",
        event: 'click',
        handler: activateDownloads
      }));
      lessonItems.push(elementFactory({
        tag: tags.button,
        className: [cssClasses.buttonPrimary, cssClasses.lessonCommands, cssClasses.lessonItem],
        textNode: 'Komendy',
        event: 'click',
        handler: activateCommandsBlock
      }));
      lessonItems.push(generateCommandsBlock(item.commands));

      lessonItems.push(elementFactory({
        tag: tags.button,
        className: [cssClasses.buttonPrimary, cssClasses.lessonSticker, cssClasses.lessonItem],
        textNode: 'Wlepa',
        event: 'click',
        handler: function (e) {
          this.closest(dataTags.lessonContent)
            ?.querySelector(dataTags.stickerImageContainer)?.classList.toggle(cssClasses.isActive);
        }
      }));
      appendElements(lessonItems, thisLessonLinks);

      thisLessonLinks.append(elementFactory({
        tag: tags.span,
        className: [cssClasses.lessonLinksClose, cssClasses.closeSign],
        event: 'click',
        handler: function () {
          this.closest(tags.div)?.classList.toggle(cssClasses.isActive);
          this.closest(dataTags.lessonContent)
            ?.querySelector(dataTags.imageBackground)?.classList.toggle(cssClasses.activatedLinks);
        }
      }));

      smallImageContainer = elementFactory({
        tag: tags.div,
        className: [cssClasses.smallImageContainer, cssClasses.lessonItem]
      });
      smallImageContainer.append(elementFactory({
        tag: tags.img,
        className: [cssClasses.lessonImage],
        attr: [{'src': './img/download-arrow.png'}, {'data-image': 'download-arrow'}]
      }));

      lessonDownloads.push(smallImageContainer);
      lessonDownloads.push(elementFactory({
        tag: tags.a,
        className: [cssClasses.buttonPrimary, cssClasses.lessonWorld, cssClasses.lessonItem],
        textNode: 'Świat',
        attr: [{'href': `./lekcje/${item.name}.mcworld`}]
      }));
      lessonDownloads.push(elementFactory({
        tag: tags.a,
        className: [cssClasses.buttonPrimary, cssClasses.lessonSyllabus, cssClasses.lessonItem],
        textNode: 'Konspekt',
        attr: [{'href': `./lekcje/${item.name}-konspekt.pdf`}, {'target': '_blank'}],
      }));
      lessonDownloads.push(elementFactory({
        tag: tags.a,
        className: [cssClasses.buttonPrimary, cssClasses.lessonChit, cssClasses.lessonItem],
        textNode: "Karteczka",
        attr: [{'href': `./lekcje/${item.name}.pdf`}, {'target': '_blank'}]
      }));
      appendElements(lessonDownloads, thisLessonDownloads);

      thisLessonDownloads.append(elementFactory({
        tag: tags.span,
        className: [cssClasses.lessonDownloadsClose, cssClasses.closeSign],
        event: 'click',
        handler: function () {
          this.closest(tags.div)?.classList.toggle(cssClasses.isActive);
          this.closest(dataTags.lessonContent)
            ?.querySelector(dataTags.lessonLinks)?.classList.add(cssClasses.isActive);
        }
      }));
      thisLesson.append(thisLessonHeader);
      thisLessonContent.append(thisLessonLinks);
      thisLessonContent.append(thisLessonDownloads);

      const stickerContainer = elementFactory({
        tag: tags.div,
        className: [cssClasses.stickerImageContainer],
        attr: [{'data-container':'sticker-image-container'}],
        event: 'click',
        handler: function (e) {
          e.stopPropagation();
        }
      });
      const stickerHolder = elementFactory({tag: tags.div, className: [cssClasses.stickerImageHolder]});
      stickerHolder.append(elementFactory({
        tag: tags.img,
        className: [cssClasses.stickerImage, cssClasses.lessonImage],
        attr: [{'src': `./lekcje/${item.name}-wlepa.png`}, {'data-image': 'sticker'}]
      }));
      stickerHolder.append(elementFactory({
        tag: tags.span,
        className: [cssClasses.stickerHolderClose, cssClasses.closeSign],
        event: 'click',
        handler: function () {
          this.closest(dataTags.stickerImageContainer)?.classList.toggle(cssClasses.isActive);
        }
      }));
      stickerContainer.append(stickerHolder);
      thisLessonContent.append(stickerContainer);

      thisLessonContent.append(elementFactory({
        tag: tags.img,
        className: [cssClasses.lessonImage],
        attr: [{'src': `./lekcje/${item.name}.png`}, {'data-image': 'background'}]
      }));
      thisLesson.append(thisLessonContent);
    }
    const lessonsElement = document?.querySelector(dataTags.lessons);
    lessonsElement.append(thisLesson);
  });
  lessonLinksVisibilitySwitcher();
}
