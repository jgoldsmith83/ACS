<!DOCTYPE javascript>

$(document).ready(function() {
$(".info").hide();
$(".menu").hide();
$(".info").fadeIn(2000,
function() {$("#servdiv").fadeIn(800,
function() {$("#condiv").fadeIn(800,
function() {$("#testdiv").fadeIn(800,
function() {$("#disdiv").fadeIn(800);});
});
});
});
return false; });
 
$(document).ready(function() {
$(".fader").hide();
$(".phone").hide();
$(".slider").animate({height: 115}, {duration: 3000, complete: function() { $(".fader").fadeIn({duration:3000,
complete: function() { $(".phone").fadeIn({duration: 3000,}); }}); }});
});
return false;&nbsp;
$(document).ready(function() {
$("#servdiv").hover(function() {
$("#servsub").slideDown('slow')
}, function() { $("#servsub").slideUp('slow')
})
});
 
$(document).ready(function() {
$("#condiv").hover(function() {
$("#consub").slideDown('slow')
}, function() {
$("#consub").slideUp('slow')
})
});
 
$(document).ready(function() {
$("#testdiv").hover(function() {
$("#testsub").slideDown('slow')
}, function() {
$("#testsub").slideUp('slow')
})
});
 

