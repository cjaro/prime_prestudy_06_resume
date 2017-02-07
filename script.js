jQuery(document).ready(function(){
  $('#button').on('click', function(){
		$('#content').css({'display': 'block'});
    $('#button').css({'display': 'none'});
  });
  $('#button').hover(function(){
    $(this).css('cursor', 'pointer');
  });
});
