import $ from 'jquery';

export default function lessonLinksVisibilitySwitcher () {
  $('.lesson-content').on('click', function () {
    $(this).children('.lesson-links').toggleClass('is-active');
  });

  $('.lesson-links').children().on('click', function (e) {
    e.stopPropagation();
  })
}
