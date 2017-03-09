"use strict";
var windowW = document.documentElement.clientWidth;
console.log(windowW);

// toggel productlist on homepage
function toggleProductListPanel(x){
	var panel = document.getElementById(x);
	var coverPanel = document.getElementById("coverPanel");
	var maxW = "80%";

	//if the screen size is smaller than 1024, the toggle panel will be 100% of screen size, 
	//otherwise it will be 80% of screen size
	if(document.documentElement.clientWidth < "1024"){
		maxW="100%";
	}else{
		maxW="80%";
	}	
	if(panel.style.width == maxW){
		panel.style.width = "0px";
		coverPanel.style.display="none";
		coverPanel.style.overflow = "hidden !important";
	}else{
		console.log(document.documentElement.clientWidth);
	
		panel.style.width = maxW;
		coverPanel.style.display = "initial";
		coverPanel.style.overflow = "scroll !important";
	}
}

// toggel information in product pages
function toggleInfo(x){
	var panel = document.getElementById(x);
	var information = document.getElementById("info");
	var maxH = "160px";


	if(information.style.height == maxH){
		information.style.height = "0px";
	}else{
		information.style.height = maxH;

	}
}


// loading function
window.onload = function(){
	setTimeout("loadingFunction()",0);

}
document.getElementById("hideAll").style.display="none";

function loadingFunction(){
	document.getElementById("hideAll").style.display="block";


	document.getElementById("hideAll").style.animation="fadein 1s";
}


// detect user scrolling section. when user reaches specific position, do something
// $(document).ready(function() {
// 	$('.overview2Content').scroll(function(){
// 		$(function()){
// 			console.log("you reach the div!!!");
		
// 		document.getElementsByClassName("overview2Content")[0].style.animation="fadein 2s";
// 	// $('#overview2Content').css("animation","fadein 5s");
// 		});
// 	});
// });