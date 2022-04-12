$( document ).ready(function() {
  let yearAr = new Array();

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
      const startYear = createElementWithClass ("li", "start-year");
      startYear.classList.add("year-"+item);
      const yearButton = createElementWithClass ("button", "year-button");
      yearButton.classList.add("year-"+item);
      yearButton.appendChild(document.createTextNode("Rok " + item));
      $(startYear).append(yearButton);
      $('.list-of-year').append(startYear);
    });
  }

  lessons.forEach(function (item){
    yearAr.push(item.year);
  });

  const showStartScreen = () => {

    const startScreenContainer = createElementWithClass ("div", "start-screen-container");
    $('#app').append(startScreenContainer);
    const startImg = createElementWithClass ("img", "start-img");
    $(startImg).attr("src", 'img/dzieci.jpg');
    $('.start-screen-container').append(startImg);
    const startTextContainer = createElementWithClass ("div", "start-text-container");
    $('.start-screen-container').append(startTextContainer);
    const startTitle = createElementWithClass ("p", "start-title");
    startTitle.appendChild(document.createTextNode("Programowanie w Minecraft"));
    $('.start-text-container').append(startTitle);
    const startContent = createElementWithClass ("p", "start-content");
    startContent.appendChild(document.createTextNode("Najbardziej innowacyjne zajęcia pozalekcyjne dla dzieci."));
    $('.start-text-container').append(startContent);
    const listOfYear = createElementWithClass ("ul", "list-of-year");
    listOfYear.appendChild(document.createTextNode("Lekcje:"));
    $('.start-text-container').append(listOfYear);

    checkYear();

    const allLessons = createElementWithClass ("li", "all-lessons");
    const allLessonsButton = createElementWithClass ("button", "all-lessons-button");
    allLessonsButton.appendChild(document.createTextNode("Lekcje wszystkie"));
    $(allLessonsButton).attr("onclick", 'myFunction()');
    $(allLessons).append(allLessonsButton);
    $('.list-of-year').append(allLessons);
  }

  showStartScreen();

});
