$(document).ready(function() {


  $("#index_nav_link").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0}, 1000);
      // scrollTop: $(window).offset().top
    // }, 1000);
    })

  $("#projects_nav_link").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 1000);
    })

  $("#skills_nav_link").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#skills").offset().top
    }, 1000);
    })  

  $("#contact_nav_link").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#contact_footer").offset().top
    }, 1000);
    })



}) // end doc ready