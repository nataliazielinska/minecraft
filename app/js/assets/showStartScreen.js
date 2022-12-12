import activateCommandsBlock from "./activateCommandsBlock";
import checkYear from "./checkYear";
import elementFactory from './elementFactory';
import generateLessons from './generateLessons';
import generateStartBox from "./generateStartBox";
import closeMenu from "./closeMenu";
import {tags} from "./tags";
import {cssClasses} from "./cssClasses";

export default function showStartScreen () {

  const tagHtmlElement = document.getElementsByTagName(tags.html)[0];
  tagHtmlElement.classList.contains(cssClasses.activatedMenu) && closeMenu();

  const idAppElement = document.getElementById('app');
  idAppElement.innerHTML = '';
  idAppElement.appendChild(elementFactory({
    tag: tags.div,
    className: [cssClasses.startScreenContainer, cssClasses.boxesContainer]
  }));

  const introBox = {
    header: {className: cssClasses.introBoxHeader, textNode: 'Wprowadzenie'},
    content: {
      className: cssClasses.introBoxContent,
      description: 'Najważniejsze informacje o wersji edukacyjnej Minecraft oraz podstawowe komendy używane podczas lecji',
    },
    link: {textNode: 'Wprowadzenie', href: '././wprowadzenie.pdf'},
    buttons: [{
      className: [cssClasses.startBoxCommands, 'intro-box-commands'],
      textNode: 'Komendy',
      handler: activateCommandsBlock,
      commands: basicCommands
    }],
    image: {className: cssClasses.introBoxImage, src: './img/intro.png'}
  }

  const lessonsBox = {
    header: {className: cssClasses.lessonsBoxHeader, textNode: 'Lekcje'},
    content: {
      className: cssClasses.lessonsBoxContent,
      description: 'Lekcje z podziałem na rok nauki',
    },
    buttons: checkYear(),
    image: {className: cssClasses.lessonsBoxImage, src: './img/lessons.png'}
  }

  const addsBox = {
    header: {className: cssClasses.addsBoxHeader, textNode: 'Dodatkowo'},
    content: {
      className: cssClasses.addsBoxContent,
      description: 'Lekcje nie wykorzystywane w pakiecie roku szkolnego',
    },
    buttons: [
      {className: [cssClasses.lessonsYear], textNode: 'Lekcje wszystkie', attr: [{'data-year': 'all'}], handler: generateLessons},
      {className: [cssClasses.lessonsYear], textNode: 'Ferie', attr: [{'data-year': 'ferie'}], handler: generateLessons}
    ],
    image: {className: cssClasses.addsBoxImage, src: './img/adds.png'}
  }

  const classStartScreenContainerElement = document.getElementsByClassName(cssClasses.startScreenContainer)[0];
  classStartScreenContainerElement.appendChild(generateStartBox(introBox));
  classStartScreenContainerElement.appendChild(generateStartBox(lessonsBox));
  classStartScreenContainerElement.appendChild(generateStartBox(addsBox));
}
