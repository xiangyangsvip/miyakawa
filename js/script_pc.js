window.onload = function() {
    $(function () {
        var policy_height = $("#policy_pc").offset().top;
        var policy_btn_height = $("#policy_btn").offset().top;
        $(window).scroll(function () {
            var this_scrollTop = $(this).scrollTop();
            if (this_scrollTop > policy_height && this_scrollTop < policy_btn_height) {
                $(".policy_textshow1").fadeIn(2000);
                $(".policy_textshow2").fadeIn(2000);
            }else{
                $(".policy_textshow1").fadeOut(2000);
                $(".policy_textshow2").fadeOut(2000);
            }
        });
    }); 
}