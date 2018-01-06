var type1 = "Say goodbye to email*servers and IT costs.";
var type2 = "Get automatic updates.";
var type3 = "Get Exchange Online.";

function typeIt( arg, id ){
	var i = 0;
	var interval = setInterval(function(){
		var currChar = arg.charAt(i);
		if(currChar == '*') { currChar = '<br>'; };
		document.getElementById(id).innerHTML += currChar;
		i++;
		if( i > arg.length) { clearInterval(interval) };
	}, 60);
}

function init() {
	
	//FRAME	1
	TweenLite.to( '#logo', 1, {opacity:1, ease:Power2.easeIn, delay:0.2});
	TweenLite.to( '#exchange', 1, {opacity:1, ease:Power2.easeIn, delay:0.2});
	TweenLite.to( '#bkg', 1, {opacity:1, ease:Power2.easeIn, delay:0.8});
	TweenLite.to( '#overlay', 1, {opacity:0.7, ease:Power2.easeOut, delay:2.8});
	
	TweenLite.delayedCall(3.6, typeIt, [type1, 'text1'] );
	TweenLite.delayedCall(7.2, typeIt, [type2, 'text2'] );
	
	TweenLite.to( '#text2', 0.6, {opacity:0, ease:Power2.easeIn, delay:9});
	TweenLite.delayedCall(10, typeIt, [type3, 'text3'] );
	
	
	TweenLite.to( '#text4', 0.6, {opacity:1, ease:Power2.easeIn, delay:11});
	
	//ENDFRAME
	TweenLite.to( '#cta', 0.4, {x:'173px', opacity:1, delay:12});
	TweenLite.to( '#cta', 0.2, {scale:1.05, delay:12.4});
	TweenLite.to( '#cta', 0.1, {scale:1, delay:12.6});
	
	TweenLite.to( '#cta', 0.2, {scale:1.05, delay:13.4});
	TweenLite.to( '#cta', 0.1, {scale:1, delay:13.6});
}