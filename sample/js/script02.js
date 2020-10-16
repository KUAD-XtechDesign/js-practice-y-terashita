
$(function(){

    let text1 = "おはようございます！";
    let text2 = "お元気ですか？";
    let num1 = 20;
    let num2 = 32;

    $("#button01").on("click",function(){
        $("#content").append("こんにちは！");
    })

    $("#button02").on("click",function(){
        $("#content").text(text1);
    })

    $("#button03").on("click",function(){
        $("#content").text(text1 + text2);
    })

    $("#button04").on("click",function(){
        $("#content").text(num1 + num2);
        /*$("#content").text(num1 - num2); 
          $("#content").text(num1 * num2);
          $("#content").text(num1 / num2);
        */
    })

    $("#button05").on("click",function(){
        $("#content").text(num1 + "たす" + num2 + "は" + (num1 + num2) + "です。");
        /*$("#content").text("答えは" + (num1 + num2));
          $("#content").text(num1 + "ひく" + num2 + "は" + (num1 - num2) + "です。");
          $("#content").text(num1 + "かける" + num2 + "は" + (num1 * num2) + "です。");
          $("#content").text(num1 + "わる" + num2 + "は" + (num1 / num2) + "です。");
        */
    })

})