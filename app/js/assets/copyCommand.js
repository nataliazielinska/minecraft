import $ from "jquery";

export default function copyCommand() {
  let copyText = $(this).children('.command-line');

  navigator.clipboard.writeText(copyText.text());
  $(this).find('.command-copy-alert').addClass('is-active');
  setTimeout(() => {
    $('.command-copy-alert').removeClass('is-active')
  }, 2000);
}
