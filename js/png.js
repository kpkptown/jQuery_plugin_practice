$(function() {
    //画像にマウスを乗せたら発動
    $('#human_png_left').hover(
        function() {
            //画像のsrc属性が別画像のパスに切り替わる
            $('#human_png_left').attr({src:'../img/human_1/hover_on.png'});
            $('#human_png_left').animate({width:'300px',height:'450px'});
            $('#human_png_right').animate({width:'200px',height:'350px'});
            $('.hover_on_text_left').css({display:'block'});
        },
        function() {
            //画像のsrc属性を元の画像のパスに戻す
            $('#human_png_left').attr({src:'../img/human_1/hover_off.png'});
            $('#human_png_left').animate({width:'250px',height:'400px'});
            $('#human_png_right').animate({width:'250px',height:'400px'});
            $('.hover_on_text_left').css({display:'none'});
        }
    );
    $('#human_png_right').hover(
        function() {
            //画像のsrc属性が別画像のパスに切り替わる
            $('#human_png_right').attr({src:'../img/human_2/hover_on.png'});
            $('#human_png_right').animate({width:'300px',height:'450px'});
            $('#human_png_left').animate({width:'200px',height:'350px'});
            $('.hover_on_text_right').css({display:'block'});
        },
        function() {
            //画像のsrc属性を元の画像のパスに戻す
            $('#human_png_right').attr({src:'../img/human_2/hover_off.png'});
            $('#human_png_right').animate({width:'250px',height:'400px'});
            $('#human_png_left').animate({width:'250px',height:'400px'});
            $('.hover_on_text_right').css({display:'none'});
        }
    );
});
