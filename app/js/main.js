import $ from "jquery";
import generateLessons from './assets/generateLessons.js';

$( document ).ready(function() {
  const yearAr = [];
  let startYear;
  let yearButton;

  lessons.forEach(function (item){
    yearAr.push(item.year);
  });

  const createElementWithClass = (tag, nameOfClass) => {
    let element = document.createElement(tag);
    element.classList.add(nameOfClass);
    return element;
  }

  const checkYear = () => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let unique = yearAr.filter(onlyUnique);
    unique.sort();

    unique.forEach(function (item){
      startYear = createElementWithClass ('li', 'start-year');
      yearButton = createElementWithClass ('button', 'year-button');
      $(yearButton).attr('data-year', item).on('click', generateLessons);
      yearButton.appendChild(document.createTextNode(`Rok ${item}`));
      $(startYear).append(yearButton);
      $('.list-of-year').append(startYear);
    });
  }

  const showStartScreen = () => {

    $('#app').append(createElementWithClass('div', 'start-screen-container'));
    const startImg = createElementWithClass('img', 'start-img');
    $(startImg).attr('src', '../dist/app/img/dzieci.jpg');
    $('.start-screen-container').append(startImg);
    $('.start-screen-container').append(createElementWithClass ('div', 'start-text-container'));
    const startTitle = createElementWithClass ('p', 'start-title');
    startTitle.appendChild(document.createTextNode('Programowanie w Minecraft'));
    $('.start-text-container').append(startTitle);
    const startContent = createElementWithClass ('p', 'start-content');
    startContent.appendChild(document.createTextNode('Najbardziej innowacyjne zajęcia pozalekcyjne dla dzieci.'));
    $('.start-text-container').append(startContent);
    const listOfYear = createElementWithClass ('ul', 'list-of-year');
    listOfYear.appendChild(document.createTextNode('Lekcje:'));
    $('.start-text-container').append(listOfYear);

    checkYear();

    startYear = createElementWithClass ('li', 'start-year');
    yearButton = createElementWithClass ('button', 'year-button');
    $(yearButton).attr('data-year', 'all').on('click', generateLessons);
    yearButton.appendChild(document.createTextNode('Lekcje wszystkie'));
    $(startYear).append(yearButton);
    $('.list-of-year').append(startYear);

  }

  showStartScreen();
});
