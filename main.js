$(document).ready(function () {
    $("#title1").slideDown(700);
    $("#title2").slideDown(700);
    $("#btn").slideDown(900);
});

$("#btn").mouseover(function () {
    $("#bg").addClass("blur");
});

$("#btn").mouseout(function () {
    $("#bg").removeClass("blur");
});

$("#btn").click(function (){
    $("#over").removeClass("hide");
    $("#over").addClass("show");
    $("body").removeClass("scale");
    // $(".fcol").delay(800).show(600);
    // $(".scol").delay(800).show(600);
    $(".l1").delay(2000).fadeTo(500*2, 1);
    $(".l2").delay(2000).fadeTo(1000*2, 1);
    $(".l3").delay(2000).fadeTo(1500*2, 1);
    $(".l4").delay(2000).fadeTo(2000*2, 1);
    $(".l5").delay(2000).fadeTo(2500*2, 1);
    $(".l6").delay(2000).fadeTo(2500*2, 1);
    $("#img").delay(600).fadeTo(3000, 1);
    $(".bb").delay(800).fadeTo(500*2, 1);
});

$("#img").click(function(){
    
    $("#over").removeClass("show");
    $("body").addClass("scale");
    $("#over").addClass("hide");
    $(".l1").fadeTo(100, 0);
    $(".l2").fadeTo(100, 0);
    $(".l3").fadeTo(100, 0);
    $(".l4").fadeTo(100, 0);
    $(".l5").fadeTo(100, 0);
    $(".l6").fadeTo(100, 0);
    $("#img").fadeTo1(100, 0);
    $(".bb").fadeTo(100,0);
    
    
})