$(function () { //this set of functions deals with the nav bar
	var $navbutton = $('.navbar-collapse ul li a'); //set variable for individual nav buttons

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
            $('.navbar-toggle:visible').click();
    });

    $navbutton.on("mouseover",function(){ //change color when mouse hover
	 	$(this).css({
	 		'background-color':'#1a237e'
	 	});
    });

   	$navbutton.on("mouseout",function(){ //change color when mouse exit
 		$(this).css({
 			'background-color':'#0d113f'
 		});
    });

});

$(function () { //this set of functions governs animations? I'm still hesistant over using js for animations vs CSS.

});