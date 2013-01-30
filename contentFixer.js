var contentDiv =		'#content'; 	//the div surrounding your content
var contentMargin = 	50 ;			//increase this number to shrink more than the window height
var shrinkFactor = 		0.05 ; 			//this is the step at which objects are reduced

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
	
	var imageElement = $('#mainImage'); //TODO: Seems like a ton of redundancy going on here
	var logoElement = $('#logoImage'); // 	   Really need to clean things up when I know how...
	
	var newImgWidth = 0;
	var newLogoWidth = 0;
	
	while ((parentHeight - contentHeight) < contentMargin ){
	
		var imageWidth = imageElement.width();
		var logoWidth = logoElement.width();

		console.log("image width: " + imageWidth + " | logo width: " + logoWidth);
		
		newImgWidth = imageWidth - (imageWidth * shrinkFactor);
		newLogoWidth = logoWidth - (logoWidth * shrinkFactor);
		
		imageElement.css('max-width', newImgWidth);
		logoElement.css('max-width', newLogoWidth);
		
		//Just proof that something actually happened.
		contentHeight = $(contentDiv).height();
		console.log("| Content height : " + contentHeight + " |\n| Window height  : " + parentHeight +  " |\n|    Difference  : " + (parentHeight-contentHeight));
	}
	centerContent();
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