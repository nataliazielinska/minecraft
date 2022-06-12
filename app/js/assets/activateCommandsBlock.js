import $ from "jquery";

export default function activateCommandsBlock (e) {
  e.stopPropagation();
  $('body').addClass('modal-commands-active');
  $(e.currentTarget)
    .siblings('.commands-container')
    .addClass('is-active');
  $(e.currentTarget)
    .parents('.lesson-content') && $(e.currentTarget)
    .parents('.lesson-content')
    .addClass('activated-commands');
}
