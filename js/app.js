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
      if(scroll <= 1){
        $(".nav").addClass("extended_menu");
      }
      else{
        $(".nav").removeClass("extended_menu");
      }
    });

    $.scrollTo(0);

    $('#link1').click(function(){$.scrollTo($("#home"), 500); });
    $('#link2').click(function(){$.scrollTo($("#about"), 500); });
    $('#link3').click(function(){$.scrollTo($("#blog"), 500); });
    $('#link4').click(function(){$.scrollTo($("#portfolio"), 500); });
    $('#link5').click(function(){$.scrollTo($("#contact"), 500); });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#home").position();
      var y = $("#about").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link1").addClass("pointer");
      }
      else{
        $("#link1").removeClass("pointer");
      }
    });
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#about").position();
      var y = $("#blog").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link2").addClass("pointer");
      }
      else{
        $("#link2").removeClass("pointer");
      }
    });
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#blog").position();
      var y = $("#portfolio").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link3").addClass("pointer");
      }
      else{
        $("#link3").removeClass("pointer");
      }
    });
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#portfolio").position();
      var y = $("#culture").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link4").addClass("pointer");
      }
      else{
        $("#link4").removeClass("pointer");
      }
    });
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var x = $("#contact").position();
      var y = $("#logos").position();
      if(scroll < y.top && scroll >= x.top){
        $("#link5").addClass("pointer");
      }
      else{
        $("#link5").removeClass("pointer");
      }
    });
  });
})
