var pagetop, menu, yPos;
function yScroll(){

	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('menu');
	yPos = window.pageYOffset;
	if(yPos > 150){
		pagetop.style.height = "36px";
		pagetop.style.paddingTop = "20px";
		menu.style.height = "0px";
	} else {
		pagetop.style.height = "120px";
		pagetop.style.paddingTop = "50px";
		menu.style.height = "50px";
	}
}
window.addEventListener("scroll", yScroll);



 for(var i = 0; i < 40; i++){ document.write("<h2>"+(i+1)+". Dummy page content ... </h2>"); }