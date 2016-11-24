$(document).ready(function () {
  $('#idmenu').mnmenu();
  $(".top-nav a ").click(function () {
    if ($(this).hasClass("hide")) {
      $(this).find("span.top-span").text("-");
      $(this).removeClass("hide");
    }else {
      $(this).find("span.top-span").text("+");
      $(this).addClass("hide");
    }
    $(this).next().toggle("slow");
  })
})
