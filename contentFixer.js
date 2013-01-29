var contentDiv = '#content';

var rObject = {
	width: 'width'
};

function centerContent() {
	var parentHeight = $(window).height();
	var childHeight = $(contentDiv).height();
	var offset = Math.ceil(( parentHeight - childHeight) / 2);
	$(contentDiv).css('margin-top', offset);
}

function resizeContent() {	
	//var windowHeight = getWindowHeight();
	//contentElement.style.display = 'static';
	var imageElement = document.getElementById('homeBox'); //TODO: Seems like a ton of redundancy going on here
	var logoElement = document.getElementById('homeLogo'); // 	   Really need to clean things up when I know how...
	var newImgWidth = 0;
	var newLogoWidth = 0;
	while (contentHeight > windowHeight){
		var imageWidth = imageElement.offsetWidth;
		var logoWidth = logoElement.offsetWidth;
		newImgWidth = imageWidth - 100; //Default step is 100, too small of an adjustment didn't seem to do anything.
		newLogoWidth = logoWidth - 100;
		imageElement.style.maxWidth = newImgWidth + 'px';
		logoElement.style.maxWidth = newLogoWidth + 'px';
		//console.log("Content height was: " + contentHeight); //Just proof that something actually happened.
		contentHeight = contentElement.offsetHeight;
		//console.log("Content height is now: " + contentHeight);
	}
	centerContent(); //Probably bad to call a function from within the same function. I should do something about this...
}			

function assessDaScreen() {
	if( $(window).height() > $(contentDiv).height()){
		centerContent();
	}
	else { 
		resizeContent() 
	}
}

$(document).ready(function() {
	assessDaScreen()
});

$(window).resize(function() {
	assessDaScreen()
});