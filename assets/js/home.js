
$(document).ready(function () {
  $(function () {


    $('.proj').hover(function () {
      $('.name').css('font-size', '5vw');
      $('.desc').css('font-size', '2vw');
      $('.leftsd').css('width', '25%');
    }, function () {
      // on mouseout, reset the background colour
      $('.name').css('font-size', '');
      $('.desc').css('font-size', '');
      $('.leftsd').css('width', '');
    });
  });

  $(function () {
    $("html").mousemove(function () {

      setTimeout(function () {
        $('#proj5').css('background-color', '#3f3f3f');
      }, 250);

      setTimeout(function () {
        $('#proj4').css('background-color', '#4f4f4f');
      }, 500);

      setTimeout(function () {
        $('#proj3').css('background-color', '#5f5f5f');
      }, 750);

      setTimeout(function () {
        $('#proj2').css('background-color', '#6f6f6f');
      }, 1000);

      setTimeout(function () {
        $('#proj1').css('background-color', '#7f7f7f');
      }, 1250);

      setTimeout(function () {
        $('#proj0').css('background-color', '#8f8f8f');
      }, 1500);

      setTimeout(function () {
        $('.notskew').css('opacity', '1');
      }, 2250);

      setTimeout(function() {
                $('.proj').css('box-shadow','-2px 0 15px -5px black');
              }, 1750);

    })
  })


})

