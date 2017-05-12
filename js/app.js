document.addEventListener("DOMContentLoaded", function(){

  function showMenu(){
    var menu_btn = document.querySelector("#header button");
    var nav = document.querySelector(".desk-menu");
    menu_btn.addEventListener("click", function(event){
      if(nav.className.indexOf("hidden")>=0){
        nav.classList.remove("hidden");
      }
      else{
        nav.classList.add("hidden")
      }
    })
  }

  showMenu();

  jQuery(function($){
    $.scrollTo(0);
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll >= 1){
        $(".nav").addClass("extended_menu");
      }
      else{
        $(".nav").removeClass("extended_menu");
      }
    });
  });
})
