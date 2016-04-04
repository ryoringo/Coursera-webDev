var main = function(){
  $('.navbar-toggle').click(function(){
    if ($('#top').is(":visible"))
    {
		$('#top').hide();
    }
	else{
		$('#top').show();
	}
  });
}
$(document).ready(main);