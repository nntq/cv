var first = ["Hello", "你好", "Aloha", "Hola"];
var second = ["Bonjour", "Привет"];
var third = ["Ciao", "مرحبا"];




// var header = document.getElementById("move");
// var scroll = header.offsetTop;






//                                                            randomize words






function random(m) {
    var n = Math.floor(Math.random() * m);

    return n;
}

document.getElementById("a").innerHTML = first[random(first.length)];



function random(k) {
    var n = Math.floor(Math.random() * l);

    return n;
}

document.getElementById("b").innerHTML = second[random(second.length)];




function random(l) {
    var n = Math.floor(Math.random() * l);

    return n;
}

document.getElementById("c").innerHTML = third[random(third.length)];


function sScroll(id) {
    var offset = 0;
    $('html,body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000)
    return false;
}

function firstBtn() {
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".fifth").hide();
    if ($(".first__comment").css("z-index")=="-1") {
        $(".first__comment").addClass("skills__comment__content");
        $(".second__comment").removeClass("skills__comment__content");
        $(".third__comment").removeClass("skills__comment__content");
        $(".fourth__comment").removeClass("skills__comment__content");
        $(".fifth__comment").removeClass("skills__comment__content");
        $(".skills__hover").hide(500);
        $(".first").delay(600).fadeIn(3000);
        $(".first__btn__inner").css({"transform":"rotate(-135deg)"});
        $(".second__btn__inner").css({"transform":"rotate(45deg)"});
        $(".third__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fourth__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fifth__btn__inner").css({"transform":"rotate(45deg)"});
    } else {
        $(".first__comment").removeClass("skills__comment__content");
        $(".skills__hover").show(900);
        $(".first").hide(500);
        $(".first__btn__inner").css({"transform":"rotate(45deg)"});
    }

}

function secondBtn() {
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".fifth").hide();
    if ($(".second__comment").css("z-index")=="-1") {
        $(".second__comment").addClass("skills__comment__content");
        $(".first__comment").removeClass("skills__comment__content");
        $(".third__comment").removeClass("skills__comment__content");
        $(".fourth__comment").removeClass("skills__comment__content");
        $(".fifth__comment").removeClass("skills__comment__content");
        $(".skills__hover").hide(500);
        $(".second").delay(600).fadeIn(3000);
        $(".second__btn__inner").css({"transform":"rotate(-135deg)"});
        $(".first__btn__inner").css({"transform":"rotate(45deg)"});
        $(".third__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fourth__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fifth__btn__inner").css({"transform":"rotate(45deg)"});
    } else {
        $(".second__comment").removeClass("skills__comment__content");
        $(".skills__hover").show(900);
        $(".second").hide(500);
        $(".second__btn__inner").css({"transform":"rotate(45deg)"});
    }

}

function thirdBtn() {
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".fifth").hide();
    if ($(".third__comment").css("z-index")=="-1") {
        $(".third__comment").addClass("skills__comment__content");
        $(".second__comment").removeClass("skills__comment__content");
        $(".first__comment").removeClass("skills__comment__content");
        $(".fourth__comment").removeClass("skills__comment__content");
        $(".fifth__comment").removeClass("skills__comment__content");
        $(".skills__hover").hide(500);
        $(".third").delay(600).fadeIn(3000);
        $(".third__btn__inner").css({"transform":"rotate(-135deg)"});
        $(".second__btn__inner").css({"transform":"rotate(45deg)"});
        $(".first__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fourth__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fifth__btn__inner").css({"transform":"rotate(45deg)"});
    } else {
        $(".third__comment").removeClass("skills__comment__content");
        $(".skills__hover").show(900);
        $(".third").hide(500);
        $(".third__btn__inner").css({"transform":"rotate(45deg)"});
    }

}

function fourthBtn() {
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".fifth").hide();
    if ($(".fourth__comment").css("z-index")=="-1") {
        $(".fourth__comment").addClass("skills__comment__content");
        $(".second__comment").removeClass("skills__comment__content");
        $(".third__comment").removeClass("skills__comment__content");
        $(".firsth__comment").removeClass("skills__comment__content");
        $(".fifth__comment").removeClass("skills__comment__content");
        $(".skills__hover").hide(500);
        $(".fourth").delay(600).fadeIn(3000);
        $(".fourth__btn__inner").css({"transform":"rotate(-135deg)"});
        $(".second__btn__inner").css({"transform":"rotate(45deg)"});
        $(".third__btn__inner").css({"transform":"rotate(45deg)"});
        $(".first__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fifth__btn__inner").css({"transform":"rotate(45deg)"});
    } else {
        $(".fourth__comment").removeClass("skills__comment__content");
        $(".skills__hover").show(900);
        $(".fourth").hide(500);
        $(".fourth__btn__inner").css({"transform":"rotate(45deg)"});
    }

}

function fifthBtn() {
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();
    $(".fourth").hide();
    $(".fifth").hide();
    if ($(".fifth__comment").css("z-index")=="-1") {
        $(".fifth__comment").addClass("skills__comment__content");
        $(".second__comment").removeClass("skills__comment__content");
        $(".third__comment").removeClass("skills__comment__content");
        $(".fourth__comment").removeClass("skills__comment__content");
        $(".first__comment").removeClass("skills__comment__content");
        $(".skills__hover").hide(500);
        $(".fifth").delay(600).fadeIn(3000);
        $(".fifth__btn__inner").css({"transform":"rotate(-135deg)"});
        $(".second__btn__inner").css({"transform":"rotate(45deg)"});
        $(".third__btn__inner").css({"transform":"rotate(45deg)"});
        $(".fourth__btn__inner").css({"transform":"rotate(45deg)"});
        $(".first__btn__inner").css({"transform":"rotate(45deg)"});
    } else {
        $(".fifth__comment").removeClass("skills__comment__content");
        $(".skills__hover").show(900);
        $(".fifth").hide(500);
        $(".fifth__btn__inner").css({"transform":"rotate(45deg)"});
    }

}


// var offset_top=$(".works__inner__background").offset();
// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     if(scroll>=offset_top.top-1)
//         $(".works__inner__background").addClass("animation");
//     console.log(scroll);
// });

// console.log(offset_top.top);


$("#first_item").mouseover(function(){
    $("#first_over").css({"display":"block"});
}).mouseout(function(){
    $("#first_over").css({"display":"none"});
})

$("#second_item").mouseover(function(){
    $("#second_over").css({"display":"block"});
}).mouseout(function(){
    $("#second_over").css({"display":"none"});
})

$("#third_item").mouseover(function(){
    $("#third_over").css({"display":"block"});
}).mouseout(function(){
    $("#third_over").css({"display":"none"});
})

$(".navigation__mobile").click(function(){
    if(($(".navigation__mobile__menu").css("display"))==="block"&&$(".navigation__mobile__menu").hasClass("navigation__mobile__menu__out")){
        $(".navigation__mobile__menu").removeClass("navigation__mobile__menu__out");
        $(".navigation__mobile__menu").css("display","none");
        
    }
    
    
    if(($(".navigation__mobile__menu").css("display"))==="none"){
        $(".navigation__mobile__menu").css("display","block");
        $(".navigation__mobile__inner").addClass("open");
    }
    else{
        $(".navigation__mobile__menu").addClass("navigation__mobile__menu__out");
        $(".navigation__mobile__inner").removeClass("open");
    }
})

$(document).ready(function(){
    $('.works__banner__slider').slick();
  });

function infoMobile(){
    if($(".works__item__over__mobile").css("display")=="none"){
        $(".works__item__over__mobile").css({"display":"block"});
        $(".info__content").fadeIn(2000);
        $(".cross_info").css({"display":"block"});
        $('.works__banner__slider').slickRemove();
    } 
        
}

function crossInfoMobile(){
    if($(".works__item__over__mobile").css("display")=="block"){
        $(".works__item__over__mobile").css({"display":"none"});
        $(".info__content").hide();
        $(".cross_info").css({"display":"none"});
    }  
        
}

