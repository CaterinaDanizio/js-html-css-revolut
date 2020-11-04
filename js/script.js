$( document ).ready(function() {

var dropdownAttivo = $("li.active")
   $("li.drop-item").click(function () {
      $(this).find(".dropdown").toggleClass("active");
    // if(!$(this).hasClass("active")){
    //     $(".dropdown").removeClass("active");
    //     }
    //     else {
    //       $(this).addClass("active");
    //     }
      });

 });
