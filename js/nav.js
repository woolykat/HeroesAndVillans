$(document).ready(function() {
  
  // Create nav from h2
  $('section').each(function() {
    $('<a href="#' + $(this).attr('id') + '">' + $(this).children('h2:first-child').html() + '</a>').appendTo('nav');
  });
  
  // For smooth scrolling
  $('nav a').click(function() {
    // Get offset of the section
    var sectionOffset = $($(this).attr('href')).offset().top;
    
    // Animate the scroll
    $('body').animate({scrollTop: sectionOffset}, 600, function() {
      return false;
    });
  });
  
  // Highlight nav link depending on section
  $('nav a:first-child').addClass('active');
  $(window).scroll(function() {
    var scrollTop = $('body').scrollTop();
    
    var sections = $('section');
    highlight(0);
    
    function highlight(index) {
      if (index >= sections.length) {
        return;
      }
      var sectionScroll = $(sections[index]).offset().top;
      if (sectionScroll >= scrollTop) {
        $('nav a').removeClass('active');
        $('nav a[href=#' + $(sections[index]).attr('id') + ']').addClass('active');
        return;
      }
      highlight(index+1);
    }
    
    
  });
});