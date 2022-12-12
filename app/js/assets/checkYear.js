import {cssClasses} from "./cssClasses";
import generateLessons from "./generateLessons";

const yearAr = [];

lessons.forEach(function (item){
  yearAr.push(item.year);
});

export default function checkYear () {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const unique = yearAr.filter(onlyUnique);
  unique.sort();

  const yearButtons = [];
  unique.forEach(function (item) {
    if (item!='ferie') {
      const yearButton = {
        className: [cssClasses.buttonPrimary, cssClasses.lessonsYear],
        textNode: `Rok ${item}`,
        attr: [{'data-year': item}],
        handler: generateLessons
      };
      yearButtons.push(yearButton);
    }
  });

  return yearButtons;
}
