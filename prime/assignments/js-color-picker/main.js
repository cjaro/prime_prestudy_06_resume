$(document).ready(function(){

  // function randomColor(min, max){
  //     return Math.floor(Math.random() * (1 + max - min) + min);
  // }

  $('h2').append('<div></div>');
  $('h2').append('<div></div>');
  $('h2').append('<div></div>');
  $('h2').append('<div></div>');


  $('.box').click(function(){
    $(this).toggleClass('rose');

    $('.box').click(function(){
      $(this).toggleClass('gold')

      $('.box').click(function(){
        $(this).toggleClass('green');

        $('.box').click(function(){
          $(this).toggleClass('blue');


        });
      });
    });
  });

});


// var spotRose = $('#spotRose').val();
// var spotGold = $('#spotGold').val();
// var spotGreen = $('#spotGreen').val();
// var spotBlue = $('#spotBlue').val();
//
// $('#box').append('<div>TestRose</div>');
// $('#colorSpot').append('<div>TestGold</div>');
// $('#colorSpot').append('<div>TestGreen</div>');
// $('#colorSpot').append('<div>TestBlue</div>');




// if ('correct color picked') {
//   allow('play again')
// } else {'wrong color'}
// }

//need to append divs, each with a different color: Rose, Gold, Green, Blue
