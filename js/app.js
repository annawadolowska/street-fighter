$(document).ready(function(){
$('.ryu').mouseenter(function(){
$('.ryu-still').hide();
$('.ryu-ready').show();
})

.mouseleave(function(){
$('.ryu-ready').hide();
$('.ryu-still').show();
})

.mousedown(function(){
playHadouken();
$('.ryu-ready').hide();
$('.ryu-throwing').show();
$('.hadouken').finish().show()
.animate(
{'left':'300px'},
500,
function() {
	$(this).hide();
	$(this).css('left','-212px');
}
 );
})

$('body').on('keydown',function(e){
if(e.which == 88){
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-cool').show();
}	
})

.on('keyup', function(e) {
        if (e.which == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    })

.mouseup(function(){
$('.ryu-throwing').hide();
$('.ryu-ready').show();

});

});

function playHadouken() {

	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

