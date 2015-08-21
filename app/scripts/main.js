// Basic hover
$(document).ready(function() {

  $('.icons i').css('opacity', 1);

  $('.icons li').hover(
    function() {
      $(this).find('i').stop().fadeTo('slow', 0.6);
    },
    function() {
      $(this).find('i').stop().fadeTo('slow', 1);
    });

  $('#slide4 a').hover(
  	function(){
  		$(this).find('i, p').stop().fadeTo('slow', 0.8);
  	},
  	function(){
  		$(this).find('i, p'). stop().fadeTo('slow', 1);
  	});

  // $('.dropdown').hover(
  // 	function(){
  // 		$(this).fadeTo('slow', 0.8);
  // 	});

  $('.dropdown-toggle').dropdown()
});

//#slide4 > a > i, p