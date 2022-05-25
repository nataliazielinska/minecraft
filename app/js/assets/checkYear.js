import generateLessons from "./generateLessons";

const yearAr = [];

lessons.forEach(function (item){
  yearAr.push(item.year);
});

export default function checkYear () {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let unique = yearAr.filter(onlyUnique);
  unique.sort();

  let yearButtons = [];
  unique.forEach(function (item) {
    if (item!='ferie') {
      let yearButton = {
        className: 'lessons-year',
        textNode: `Rok ${item}`,
        attr: [{'data-year': item}],
        handler: generateLessons
      };
      yearButtons.push(yearButton);
    }
  });
  return yearButtons;
}
