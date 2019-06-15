$(function() {
    $('.proj').hover(function() {
      $('.name').css('font-size', '5vw');
      $('.desc').css('font-size', '2vw');
      $('.leftsd').css('width', '25%');
    }, function() {
      // on mouseout, reset the background colour
      $('.name').css('font-size', '');
      $('.desc').css('font-size', '');
      $('.leftsd').css('width', '');
    });
  });