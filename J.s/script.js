$(document).ready(function() {
    $('#Landing-Page').on('mouseover',function (){ 
        $(this).css('color' , '#2194f3'), 
       $('h3').mouseleave(function (){
            $(this).css('color' , '#ABBED1')
        })
    });
    $('Landing-Page').on('mouseover', function(){
        $('All').css('outline-color','#2194f3')
    })
});

