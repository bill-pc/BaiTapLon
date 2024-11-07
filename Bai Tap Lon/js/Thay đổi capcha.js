$(document).ready(function(){
    var listCapcha = [
        "../img/capcha (1).png",
        "../img/capcha (2).png",
        "../img/capcha (3).png",
        "../img/capcha (4).png",
        "../img/capcha (5).png",
        "../img/capcha (6).png",
        "../img/capcha (7).png"
    ];

    var curCapcha_index = 0;

    // đổi capcha đăng nhập
    $("#btn-recapcha-login").click(function(event){
        event.preventDefault();

        curCapcha_index = (curCapcha_index + 1) % listCapcha.length;
        $("#capcha-login").attr("src", listCapcha[curCapcha_index]);
    });

    // đổi capcha đăng ký
    $("#btn-recapcha-register").click(function(event){
        event.preventDefault();

        curCapcha_index = (curCapcha_index + 1) % listCapcha.length;
        $("#capcha-register").attr("src", listCapcha[curCapcha_index])
    })
});
