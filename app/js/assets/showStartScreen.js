import $ from 'jquery';
import activateCommandsBlock from "./activateCommandsBlock";
import checkYear from "./checkYear";
import elementFactory from './elementFactory';
import generateLessons from './generateLessons';
import generateStartBox from "./generateStartBox";

export default function showStartScreen () {
  $('#app').empty();
  $('#app').append(elementFactory({tag: 'div', className: ['start-screen-container', 'boxes-container']}));

  const introBox = {
    header: {className: 'intro-box-header', textNode: 'Wprowadzenie'},
    content: {
      className: 'intro-box-content',
      description: 'Najważniejsze informacje o wersji edukacyjnej Minecraft oraz podstawowe komendy używane podczas lecji',
    },
    link: {textNode: 'Wprowadzenie', href: '././wprowadzenie.pdf'},
    buttons: [{className: ['start-box-commands', 'intro-box-commands'], textNode: 'Komendy', handler: activateCommandsBlock, commands: basicCommands}],
    image: {className: 'intro-box-image', src: '././img/intro.png'}
  }

  const lessonsBox = {
    header: {className: 'lessons-box-header', textNode: 'Lekcje'},
    content: {
      className: 'lessons-box-content',
      description: 'Lekcje z podziałem na rok nauki',
    },
    buttons: checkYear(),
    image: {className: 'lessons-box-image', src: '././img/lessons.png'}
  }

  const addsBox = {
    header: {className: 'adds-box-header', textNode: 'Dodatkowo'},
    content: {
      className: 'adds-box-content',
      description: 'Lekcje nie wykorzystywane w pakiecie roku szkolnego',
    },
    buttons: [
      {className: 'lessons-year', textNode: 'Lekcje wszystkie', attr: [{'data-year': 'all'}], handler: generateLessons},
      {className: 'lessons-year', textNode: 'Ferie', attr: [{'data-year': 'ferie'}], handler: generateLessons}
    ],
    image: {className: 'adds-box-image', src: '././img/adds.png'}
  }

  $('.start-screen-container').append(generateStartBox(introBox));
  $('.start-screen-container').append(generateStartBox(lessonsBox));
  $('.start-screen-container').append(generateStartBox(addsBox));

}

