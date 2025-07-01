$(document).ready(function () {

  const url = 'http://localhost:8000';
  
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

    // Do this in the backend instead if we end up having a backend server
    // form_data['time_joined'] = new Date();

    fetch(url + '/joinLoyaltyProgram', {
      method: 'post',
      body: JSON.stringify(form_data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log('server gave back:');
      console.log(data);
    })

    /* */
    /* */
    /* */
    // joinLoyaltyProgram(form_data);
  })

// async function joinLoyaltyProgram(form_data) {
//   try {
//     const response = await fetch(url + '/joinLoyaltyProgram', {
//       method: 'post',
//       body: JSON.stringify(form_data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

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