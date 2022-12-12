import {cssClasses} from "./cssClasses";
import {dataTags} from "./dataTags";

export default function activateDownloads (e) {
  this.closest(dataTags.lessonLinks)?.classList.remove(cssClasses.isActive);
  this.closest(dataTags.lessonContent)
    .querySelector(dataTags.lessonDownloads)?.classList.toggle(cssClasses.isActive);

  this.closest(dataTags.lessonContent)
    .querySelector(dataTags.lessonDownloads).addEventListener('click', function (event){
      event.stopPropagation();
    });

  for (const element of document.querySelectorAll(dataTags.lessonLinks)) {
    element.addEventListener('click', function (event){
      event.stopPropagation();
    })
  }
}
