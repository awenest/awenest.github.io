
$(document).ready(function(){
    $('.Profile').hide();
    $('#buttonn').hide();
    $('#buttonn').fadeIn(37000);
      $('#buttonn').on('click',function(){
        $(this).next().slideToggle(400);
        $(this).text($(this).text() == 'Click Me !' ? 'Click to close' : 'Click Me !');         
    });
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}
});
window.addEventListener("scroll", scrollEventHandler, false);
/*
$('.submit').click(function() {
    var toAdd = $('input[name=name]').val();
    var toAdd1 = $('input[name=number]').val();
    var toAdd2 = $('input[name=id]').val();
    var toAdd3 = $('input[name=feedback]').val();
}

/*
$('#mine').fadeIn(6000);
$('#mine').on('click',function(){
    $(this).next().toggle(300);
    
});
*/
