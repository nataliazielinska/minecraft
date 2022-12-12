import {dataTags} from "./dataTags";
import {cssClasses} from "./cssClasses";

export default function lessonLinksVisibilitySwitcher () {
  for (const element of document.querySelectorAll(dataTags.lessonContent)) {
    element.addEventListener('click', function (event) {
      element.querySelector(dataTags.lessonLinks).classList.add(cssClasses.isActive);
      element.querySelector(dataTags.imageBackground).classList.add(cssClasses.activatedLinks);
    });
  }

  for (const element of document.querySelectorAll(dataTags.lessonLinks)) {
    element.addEventListener('click', function (event){
        event.stopPropagation();
      })
  }
}
