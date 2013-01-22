function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}
function setContent() {
	if (document.getElementById) {
		var windowHeight = getWindowHeight();
		if (windowHeight > 0) {
			var contentElement = document.getElementById('content'); //This is the containing div by which everything is measured.
			var contentHeight = contentElement.offsetHeight;
			if (windowHeight - contentHeight > 0) { //Just center content if everything already fits in the viewport
				contentElement.style.position = 'relative';
				contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2) - 26) + 'px';
			}
			else if (( contentHeight + 100 ) > windowHeight){ //If the content is greater than the viewport.
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
				setContent(); //Probably bad to call a function from within the same function. I should do something about this...
			}
		}
	}
}
window.onload = function() {
	setContent();
}
window.onresize = function() {
	setContent();
}