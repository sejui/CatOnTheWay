
// toggel productlist 
function toggleProductListPanel(x){
	var panel = document.getElementById(x);
	var coverPanel = document.getElementById("coverPanel");
	var maxW = "80%";


	if(panel.style.width == maxW){
		panel.style.width = "0px";
		coverPanel.style.display="none";
	}else{
		panel.style.width = maxW;
		coverPanel.style.display = "initial";
	}
}