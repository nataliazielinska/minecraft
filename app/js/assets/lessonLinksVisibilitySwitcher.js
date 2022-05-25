import $ from 'jquery';

export default function lessonLinksVisibilitySwitcher () {
  $('.lesson-content').on('click', function () {
    $(this).children('.lesson-links').addClass('is-active');
    $(this).children('.lesson-image').addClass('activated-links');
  });

  $('.lesson-links').children().on('click', function (e) {
    e.stopPropagation();
  })
}
