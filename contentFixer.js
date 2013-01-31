var	contentDiv =		'#content' , 	//the div surrounding your content
	contentMargin = 	50 ,			//increase this number to shrink more than the window height
	shrinkFactor = 		0.05 , 			//this is the step at which objects are reduced
	fadeIn =			true ,			//this will fade the content in on load to hide any unsightly content jumping around
	transitionTime =	3000;

var rObject = [ 		'#mainImage' , 
						'#logoImage' 
];



function centerContent() {

	//Create and apply whatever offset the content area will need to be centered
	var offset = Math.ceil(( $(window).height() - $(contentDiv).height()) / 2);
	$(contentDiv).css('margin-top', offset);
	
} 

function resizeContent() {	
	
	//Add a dimension to the array to store respective object widths
	for(var i = 0; i < rObject.length; i++){
		rObject[i] = [rObject[i],$(rObject[i]).width()]
	}
	
	//Keep looping until the content fits in the screen!
	while ( ($(window).height() - $(contentDiv).height()) < contentMargin ){
		
		//Chop each object down by whatever factor was been assigned
		for(var i = 0; i < rObject.length; i++){
			rObject[i][1] = rObject[i][1] - (rObject[i][1] * shrinkFactor);
			$(rObject[i][0]).css('max-width', rObject[i][1])
		}
	}
	
	//Center what remains of the content
	centerContent();
}			

function assessDaScreen() {
	if( ($(window).height() - $(contentDiv).height()) < contentMargin ){
		resizeContent();
	}
	else { 
		centerContent();
	}
}

$(document).ready(function() {
	
	if(fadeIn){
	$(contentDiv).fadeTo( 0, 0 );
	setTimeout("assessDaScreen()",100);
	$(contentDiv).fadeTo( transitionTime, 1 );
	}
	else{setTimeout("assessDaScreen()",100);}
	
});

$(window).resize(function() {
	assessDaScreen();
});