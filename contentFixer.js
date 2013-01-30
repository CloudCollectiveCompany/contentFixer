var contentDiv = '#content';

/* var resizableObjects = [ //TODO: Make objects resizable by adding them into an array. Going to have to do it clumsily for now, I guess...
	'mainImage' //Only works with IDs!
];

var rObject = {
	width: 0,
	height: 0,
	report: function(){
		console.log("width: " + this.width + " | height: " + this.height);
	}
};

for( var i=0; i>= resizableObjects.length; i++){
	console.log(rObject.height);
	resizableObjects[i] = new rObject();
	resizableObjects[i].report()
}*/

function centerContent() {
	var parentHeight = $(window).height();
	var childHeight = $(contentDiv).height();
	var offset = Math.ceil(( parentHeight - childHeight) / 2);
	$(contentDiv).css('margin-top', offset);
} 

function resizeContent() {	
	var parentHeight = $(window).height();
	var contentHeight = $(contentDiv).height();
	//var windowHeight = getWindowHeight();
	//contentElement.style.display = 'static';
	var imageElement = $('#mainImage'); //TODO: Seems like a ton of redundancy going on here
	var logoElement = $('#logoImage'); // 	   Really need to clean things up when I know how...
	var newImgWidth = 0;
	var newLogoWidth = 0;
	while (contentHeight > parentHeight){
		var imageWidth = imageElement.height();
		var logoWidth = logoElement.height();

		console.log("image width: " + imageWidth + " | logo height: " + logoWidth);
		
		newImgWidth = imageWidth - 5; //Default step is 100, too small of an adjustment didn't seem to do anything.
		newLogoWidth = logoWidth - 5;
		imageElement.css('max-width', newImgWidth);
		logoElement.css('max-width', newLogoWidth);
		
		//Just proof that something actually happened.
		console.log("Content height was: " + contentHeight); 
		contentHeight = $(contentDiv).height();
		console.log("Content height is now: " + contentHeight);
	}
	centerContent(); //Probably bad to call a function from within the same function. I should do something about this...
}			

function assessDaScreen() {
	if( $(window).height() < $(contentDiv).height()){
		resizeContent();
	}
	else { 
		centerContent();
	}
}

$(document).ready(function() {
	setTimeout("assessDaScreen()",1000);
});

$(window).resize(function() {
	assessDaScreen()
});