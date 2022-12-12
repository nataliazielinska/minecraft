import {cssClasses} from "./cssClasses";
import {dataTags} from "./dataTags";

export default function activateCommandsBlock (e) {
  e.stopPropagation();
  document.querySelector('body')?.classList.add(cssClasses.modalCommandsActive);
  e.currentTarget.closest('div').querySelector(dataTags.commandsContainer)?.classList.add(cssClasses.isActive);
  e.currentTarget.closest(dataTags.lessonContent)?.classList.add(cssClasses.activatedCommands);
}
