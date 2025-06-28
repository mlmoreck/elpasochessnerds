$(document).ready(function () {

  $('.join-loyalty-btn').on('click', function(event){
    event.stopPropagation();

    $('#loyalty-program-form-container').show();
    var time_join_clicked = new Date();
    console.log('time_join_clicked: ' + time_join_clicked);
  })

  $('#loyalty-program-form').on('submit', function(event){
    event.preventDefault();
    
    var form_data = $(this).serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    form_data['time_joined'] = new Date();

    console.log(form_data);
  })

  $('.flip-card').on('click', function(){
    var $this_flip_card = $(this);
    var is_loyalty_program = $this_flip_card.data('page') == 'loyalty-program';

    if(!$this_flip_card.hasClass('flipped')){ // not flipped yet
      $this_flip_card.addClass('flipped');
    } else if(!$this_flip_card.hasClass('menu') && !is_loyalty_program){ // flipped info card; go to full page (omit loyalty programm)
      window.location = './' + $this_flip_card.data('page') + '.html';
    } else if(!is_loyalty_program) { // menu/other; just flip it back (omit loyalty programm)
      $this_flip_card.removeClass('flipped');
    }
  })
});