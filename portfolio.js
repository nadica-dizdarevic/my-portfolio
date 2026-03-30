$(document).ready(function() {
  
  const content_p = document.querySelectorAll("#content p");
  
  $("#cv").fadeIn();
  $("#content").fadeOut();
    
  $("#content .fa-refresh").hover(
    function() {
      $(this).addClass("fa-spin");    
    }, 
    function() {
      $(this).removeClass("fa-spin");
    }                                     
  );
  
  $("#content .fa-refresh").click(() => {
    content_p.forEach((val) => {
      val.style.display = "block";
    });                                   
  });
    
  $("#content p").append('<i class="fa fa-close"></i>');
  
  $("i").click(function() {
    const closestP = $(this).closest("p");
    closestP.css("display", "none");
  });
  
  $("h4 i").click(() => {
    $("#content p").show();
  });
 
  $("#open").click(() => {
    $("#cv").fadeIn();
    $("#cv").addClass("new");
    $("#content").fadeIn(5000);
  }); 

  $("#close").click(() => {
    $("#content").fadeOut(5000);
    $("#cv").removeClass("new", 5000);
    $("#cv").fadeIn();
  });
  
  $(".hamburger-menu").click(function(e) {
    e.preventDefault();
   
    if ($(this).hasClass("opened")) {
      $("ul").slideUp(2000);
    } else {
      $("h4").show();
      $("ul").slideDown(2000);  
    }
    $(this).toggleClass("opened");
  });
});