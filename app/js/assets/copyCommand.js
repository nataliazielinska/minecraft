import {cssClasses} from "./cssClasses";

export default function copyCommand() {
  navigator.clipboard.writeText(this.querySelector('.command-line').textContent);

  this.querySelector('.command-copy-alert')?.classList.add(cssClasses.isActive);
  setTimeout(() => {
    this.querySelector('.command-copy-alert')?.classList.remove(cssClasses.isActive);
  }, 2000);
}
