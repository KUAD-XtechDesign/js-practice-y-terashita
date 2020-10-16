
$(function(){

  $("#button01").on("click",function(){
    $(".back-red").slideUp();
  })

  $("#button02").on("click",function(){
      /*$(".back-red").show();*/
      $(".back-blue").slideUp();
  })

  $("#button03").on("click",function(){
      $("#box03,#box07").slideUp();
  })

  $("#button04").on("click",function(){
      $(".box").show();
  })
})