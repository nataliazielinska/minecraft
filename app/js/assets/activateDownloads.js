import $ from "jquery";

export default function activateDownloads (e) {
  $(this).parents('.lesson-links').removeClass('is-active');
  $(this).parents('.lesson-links').siblings('.lesson-downloads').toggleClass('is-active');

  $(this).parents('.lesson-links').siblings('.lesson-downloads').on('click', function (e) {
    e.stopPropagation();
  });

  $('.lesson-links').children().on('click', function (e) {
    e.stopPropagation();
  });
}
