$(document).ready(function () {
  $('.flip-card').on('click', function(){
    $this = $(this);

    if(!$this.hasClass('flipped')){ // not flipped yet
      $this.addClass('flipped');
    } else if(!$this.hasClass('menu')){ // flipped info card; go to full page
      window.location = './' + $this.data('page') + '.html';
    } else { // menu/other; just flip it back
      $this.removeClass('flipped');
    }
  })
});