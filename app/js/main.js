$( document ).ready(function() {
  const lessons = window.lessons;
  for (const lesson in lessons.year1) {
    console.log(lesson)
    $('#app').append(lesson);
  }

  const showStartScreen = () => {
    const markup = `
<div class="">
<!--    <img src="img/dzieci.jpg" />-->
    <p class="xd">Ckliwy tekst</p>
</div>`
    $('#app').html(markup);
  }

  showStartScreen()
});
