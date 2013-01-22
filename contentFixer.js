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
			var contentElement = document.getElementById('content');
			var contentHeight = contentElement.offsetHeight;
			if (windowHeight - contentHeight > 0) {
				contentElement.style.position = 'relative';
				contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2) - 26) + 'px';
			}
			else if (( contentHeight + 100 ) > windowHeight){
				contentElement.style.display = 'static';
				var imageElement = document.getElementById('homeBox');
				var logoElement = document.getElementById('homeLogo');
				var newImgWidth = 0;
				var newLogoWidth = 0;
				while (contentHeight > windowHeight){
					var imageWidth = imageElement.offsetWidth;
					var logoWidth = logoElement.offsetWidth;
					newImgWidth = imageWidth - 100;
					newLogoWidth = logoWidth - 100;
					imageElement.style.maxWidth = newImgWidth + 'px';
					logoElement.style.maxWidth = newLogoWidth + 'px';
					console.log("Content height was: " + contentHeight);
					contentHeight = contentElement.offsetHeight;
					console.log("Content height is now: " + contentHeight);
				}
				setContent();
			}
		}
	}
}
function resizeContent() {
	if (document.getElementByClassName){
		var featureElement = document.getElementByID("homeBox");
		featureElement.style.display="none !important";
	}
}
window.onload = function() {
	setContent();
}
window.onresize = function() {
	setContent();
}