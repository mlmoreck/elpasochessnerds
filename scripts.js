$(document).ready(function () {
  $('.flip-card').on('click', function(){
    if($(this).hasClass('flipped')){
      $(this).removeClass('flipped');
    } else {
      $(this).addClass('flipped');
    }
  })
});