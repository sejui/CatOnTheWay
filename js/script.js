
// toggel productlist 
function toggleProductListPanel(x){
	var panel = document.getElementById(x);
	var coverPanel = document.getElementById("coverPanel");
	var maxW = "80%";


	if(panel.style.width == maxW){
		panel.style.width = "0px";
		coverPanel.style.display="none";
		coverPanel.style.overflow = "hidden !important";
	}else{
		panel.style.width = maxW;
		coverPanel.style.display = "initial";
		coverPanel.style.overflow = "scroll !important";
	}
}

// toggel information
function toggleInfo(x){
	var panel = document.getElementById(x);
	var information = document.getElementById("info");
	var maxH = "160px";


	if(information.style.height == maxH){
		information.style.height = "0px";
		// information.style.display="none";
	}else{
		information.style.height = maxH;
		// information.style.display="initial";

	}
}