$(function(){
    $("a").click(function(e){
        if(this.hash !== ""){
            e.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop : $(gato).offset().top
            },800,function(){
                window.location.hash = gato;
            });
        }
    });
});