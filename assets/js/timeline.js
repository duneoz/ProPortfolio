//set up global variables for all functions to use
var item = '.timeline-item';
var content = '.p-timeline-content';
var active = 'i-is-active';

//Handling events
$('.timeline-item').on('click', function(){ showTimelineContent(this); });
$('.close').on('click', function(){ closeCurrentContent(this); });

function showTimelineContent(element){
    console.log("this is working");
  var itemId = $(element).find('.p-timeline-carmodel').attr('data-car');
  var highlighted = $(element).find('.p-timeline-carmodel');

  //Prevent having multiple items with the class i-is-active
  if($(item).hasClass(active)){ $(item).removeClass(active); }

  //grab the id from the data attribute from each contentblock
  $(content).each(function(){
    var contentid = $(this).attr('data-car');

    //check for timeline item id is equal to the content id
    //If they're equal, show the content associated to that timeline item
    if(itemId == contentid){
      var current = $(content +'[data-car="'+contentid+'"]');
      $(current).addClass(active);
      $(element).addClass(active);

      //If the content is not the selected (current) one
      $(content).not(current).removeClass(active);

      //Scroll to shown content
      var target= $(current);
      $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000);
    }
  });
}

function closeCurrentContent(event){
  var contentblock = $(event).parents(content);
  var contentid = $(contentblock).attr('data-car');
  $(item).each(function(){
    var itemId = $(this).find('.p-timeline-carmodel').attr('data-car');
    
    if(itemId == contentid){
      //move page back to timeline
      var target= $('.timeline-title');
      $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000);
      
      //remove class i-is-active from highlighted item 
      var currentItem = $(this).removeClass(active);
      contentblock.removeClass(active);

    }
  });
}