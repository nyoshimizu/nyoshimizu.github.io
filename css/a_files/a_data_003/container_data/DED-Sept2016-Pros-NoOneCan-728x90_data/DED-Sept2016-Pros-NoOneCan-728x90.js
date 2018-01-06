(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#C40022",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.TextBox4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EAnKAATIBdBdIAAH2Mg+BAAAIzRzP");
	this.shape.setTransform(15.4,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3).p("AJqJqIzTzT");
	this.shape_1.setTransform(-183.6,-46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("AKhL7IhdAAIAAkgIzZzZ");
	this.shape_2.setTransform(208,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3).p("AeamCMg8kAAAIAAMU");
	this.shape_3.setTransform(71.4,54.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAAQAAgZAbAAQAcAAAAAZQAAAagcAAQgbAAAAgag");
	this.shape_4.setTransform(261,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABvIAAgxQAXAKAeAAQAbAAAAgRIAAgFQAAgIgDgEQgEgFgJgEIgigTQgggQAAgiIAAgVQgBgcATgPQASgOAhAAQAjAAAQAHIAAAxQgUgJgbAAQgMAAgFAEQgEAFAAAIIAAAEQAAAJADAGQADAEAJAGIAnAWQAbANABAeIAAAWQgBAbgTAPQgWAPgiAAQgmAAgSgIg");
	this.shape_5.setTransform(249.8,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAbAAAPANQAQANAAAaIAAB+QAAA3g3AAgAgSBKIAXAAQAOAAAAgQIAAh4QAAgFgDgEQgDgDgIAAIgXAAg");
	this.shape_6.setTransform(234.2,69.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgB1IgJg2IgtAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_7.setTransform(217.4,69.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_8.setTransform(201,69.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4B1IAAjpIA0AAIAAC/IA9AAIAAAqg");
	this.shape_9.setTransform(186.7,69.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARB1IgnhwIAABwIgzAAIAAjpIAzAAIAABqIAlhqIA2AAIgrByIAwB3g");
	this.shape_10.setTransform(171.9,69.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQB1IgdhVIgHAAIAABVIgzAAIAAjpIBKAAQAdAAAPANQAQANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgHgDgDQgEgDgFAAIgUAAg");
	this.shape_11.setTransform(155.5,69.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BoQgRgQgBgcIAAh3QABgcARgQQATgRAhAAQAjAAASARQARAQAAAcIAAB3QAAAcgRAQQgSARgjAAQghAAgTgRgAgSg4IAABxQAAARASAAQAUAAgBgRIAAhxQABgRgUAAQgSAAAAARg");
	this.shape_12.setTransform(138.9,69.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB1IgWicQAAAggEAfIgPBdIgwAAIgfjpIAtAAIAOBsIADAgIARiMIApAAIAQCKQABggAFgdIALhNIAsAAIggDpg");
	this.shape_13.setTransform(120.6,69.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4B1IAAjpIA0AAIAAC/IA9AAIAAAqg");
	this.shape_14.setTransform(98.7,69.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgB1IgJg2IgtAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_15.setTransform(83.2,69.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoBoQgSgPgBgbIAAh6QAAgcATgPQAUgPAkAAQAYAAATAEIAAAvQgTgFgTAAQgTAAgDAEQgFAEgBAIIAABwQABARAXAAQAbAAAQgFIAAAuQgWAFgXAAQgkAAgTgPg");
	this.shape_16.setTransform(67.7,69.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAxAAIAADpg");
	this.shape_17.setTransform(56.8,69.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgrAAIAAC9g");
	this.shape_18.setTransform(45.8,69.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAxAAIAADpg");
	this.shape_19.setTransform(34.7,69.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBKAAQAdAAAPANQAQANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgHgEgDQgDgDgFAAIgUAAg");
	this.shape_20.setTransform(23.1,69.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBoQgSgPAAgbIAAh6QAAgcASgPQATgPAkAAQAZAAASAEIAAAvQgSgFgTAAQgUAAgCAEQgGAEAAAIIAABwQAAARAYAAQAbAAAPgFIAAAuQgVAFgXAAQglAAgSgPg");
	this.shape_21.setTransform(7.9,69.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAWIAAgrIBPAAIAAArg");
	this.shape_22.setTransform(-4.2,69.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaB1Qgxh/gIgaQAIAbAABAIAAA+IgzAAIAAjpIAzAAIAdBPQATAvAHAaQgIggAAg9IAAg7IAzAAIAADpg");
	this.shape_23.setTransform(-18.1,69.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_24.setTransform(-35,69.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAyAAIAADpg");
	this.shape_25.setTransform(-46.9,69.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhABvIAAgxQAXAKAeAAQAbAAAAgRIAAgFQAAgHgDgFQgEgEgIgFIgjgTQghgQAAgiIAAgVQAAgbATgQQATgOAgAAQAjAAAQAHIAAAxQgVgJgaAAQgMAAgEAEQgFAEAAAJIAAAEQAAAKADAFQAEAFAIAFIAnAWQAcANAAAeIAAAWQAAAbgVAPQgUAPgjAAQgmAAgSgIg");
	this.shape_26.setTransform(-58.2,69.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag/BvIAAgxQAWAKAeAAQAbAAAAgRIAAgFQAAgIgDgEQgEgEgIgFIgjgTQghgQAAgiIAAgVQAAgbATgQQATgOAgAAQAjAAAQAHIAAAxQgVgJgaAAQgMAAgEAEQgFAEAAAJIAAAEQAAAKADAFQADAEAJAGIAnAWQAcANAAAeIAAAWQAAAbgVAPQgUAPgjAAQgmAAgRgIg");
	this.shape_27.setTransform(-73.2,69.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAxAAIAADpg");
	this.shape_28.setTransform(-84.5,69.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAtB1IAAhRQAAgkAGggIggBaIgmAAIgghaQAGAfAAAlIAABRIgwAAIAAjpIA0AAIApB2IAph2IA2AAIAADpg");
	this.shape_29.setTransform(-99,69.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBLAAQAcAAAPANQAQANAAAaIAAArQAAAogcAJIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgIgEgCQgDgDgFAAIgUAAg");
	this.shape_30.setTransform(246.4,40.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzBnQgSgRAAgcIAAiwIAzAAIAACuQAAAQASAAQATAAAAgQIAAiuIAzAAIAACwQAAAcgRARQgSAQgjAAQggAAgTgQg");
	this.shape_31.setTransform(229.8,40.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAATARQASAQAAAcIAAB3QAAAcgSAQQgTARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_32.setTransform(213.5,40.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYB1IAAhJIg4igIA0AAIALAkQAMAlAFAlQAIgoAMgjIAKgjIAzAAIg4CgIAABJg");
	this.shape_33.setTransform(197.4,40.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBLAAQAcAAAPANQAQANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgIgEgCQgCgDgGAAIgUAAg");
	this.shape_34.setTransform(175.7,40.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATARAAAbIAAB3QAAAbgTARQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_35.setTransform(159.1,40.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag5B1IAAjpIBzAAIAAAsIg/AAIAAA7IA6AAIAAArIg6AAIAABXg");
	this.shape_36.setTransform(144.5,40.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag/BvIAAgxQAWAKAdAAQAcAAAAgRIAAgFQAAgHgDgFQgFgFgHgEIgigTQgigRAAghIAAgVQABgbARgQQAUgOAfAAQAiAAASAHIAAAxQgVgJgaAAQgMAAgEAEQgGAEAAAIIAAAFQABAKADAFQADAEAJAGIAnAWQAbANAAAeIAAAWQABAbgVAPQgUAPgjAAQgmAAgRgIg");
	this.shape_37.setTransform(123.7,40.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAQB1IgdhVIgHAAIAABVIgzAAIAAjpIBLAAQAcAAAQANQAPANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgIgEgCQgDgDgFAAIgUAAg");
	this.shape_38.setTransform(108.5,40.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_39.setTransform(93.3,40.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgiB1IgtjpIA0AAQATBrAEAbIAEA3QAGg3AGgiIAPhkIA1AAIgtDpg");
	this.shape_40.setTransform(77.5,40.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBLAAQAcAAAPANQAQANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgDQADgEAAgIIAAgnQAAgIgDgCQgEgDgFAAIgUAAg");
	this.shape_41.setTransform(62,40.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_42.setTransform(46.7,40.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhABvIAAgxQAXAKAeAAQAbAAAAgRIAAgFQAAgHgDgFQgEgEgIgFIgjgTQghgRAAghIAAgVQAAgbATgQQASgOAhAAQAhAAASAHIAAAxQgVgJgaAAQgMAAgEAEQgFAEAAAIIAAAFQAAAKADAFQAEAFAIAFIAnAWQAcANAAAeIAAAWQAAAbgVAPQgUAPgjAAQgmAAgSgIg");
	this.shape_43.setTransform(32.1,40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAcAAAPANQAPANAAAaIAAB+QAAA3g3AAgAgSBKIAXAAQAOAAAAgQIAAh4QAAgFgDgEQgCgDgJAAIgXAAg");
	this.shape_44.setTransform(10.4,40.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_45.setTransform(-4.6,40.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgqAAIAAC9g");
	this.shape_46.setTransform(-19,40.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAhB1IgKg2IgtAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_47.setTransform(-33.1,40.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgoBoQgSgPAAgbIAAh6QAAgcATgPQATgPAkAAQAZAAARAFIAAAuQgRgFgUAAQgUAAgCAEQgGAFAAAHIAABwQAAARAYAAQAbAAAPgFIAAAuQgUAFgYAAQgkAAgTgPg");
	this.shape_48.setTransform(-48.6,40.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAyAAIAADpg");
	this.shape_49.setTransform(-59.4,40.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAbAAAPANQAPANABAaIAAB+QgBA3g2AAgAgSBKIAXAAQANAAAAgQIAAh4QABgFgDgEQgDgDgIAAIgXAAg");
	this.shape_50.setTransform(-71.3,40.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_51.setTransform(-86.3,40.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhEB1IAAjpIBQAAQAbAAAQANQAOANAAAaIAAB+QAAA3g2AAgAgSBKIAWAAQAPAAAAgQIAAh4QAAgFgDgEQgDgDgJAAIgWAAg");
	this.shape_52.setTransform(-101.5,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.9,-110.4,523.8,206.3);


(lib.TextBox3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AX7X7Mgv1gv1");
	this.shape.setTransform(-116.8,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3).p("Al0+HMAv1Av1IAAMWMgkiAAAMgvjgvk");
	this.shape_1.setTransform(1.1,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("AyIGSIAAsUMAkgAAA");
	this.shape_2.setTransform(152.4,152.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYB1IAAhJIg4igIA0AAIAMAjQANAsAEAfQAFgfANgsIALgjIAzAAIg3CgIAABJg");
	this.shape_3.setTransform(240.1,167.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaB1QgyiBgGgYQAHAcAAA/IAAA+IgzAAIAAjpIAzAAIAdBPQATAvAHAaQgIggAAg9IAAg7IAzAAIAADpg");
	this.shape_4.setTransform(222.8,167.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgB1IgKg2IgsAAIgJA2IgxAAIAvjpIBEAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_5.setTransform(205.5,167.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDB1IAAjpIBMAAQAbAAAPANQARANgBAaIAAA/QABAYgRANQgPANgbAAIgYAAIAABEgAgPAFIARAAQAOAAAAgMIAAgzQAAgOgOAAIgRAAg");
	this.shape_6.setTransform(190.3,167.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtB1IAAhSQAAgjAGggIggBaIgmAAIgghaQAGAfAAAkIAABSIgwAAIAAjpIAzAAIAqB2IAqh2IA1AAIAADpg");
	this.shape_7.setTransform(171.5,167.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAjAAASARQASAQAAAcIAAB3QAAAcgSAQQgSARgjAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_8.setTransform(152.6,167.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoBoQgTgPAAgbIAAh7QABgbASgPQAUgPAjAAQAaAAARAEIAAAvQgTgFgSAAQgTgBgDAFQgGAEABAJIAABvQgBARAYAAQAbAAAPgFIAAAuQgUAFgYAAQgkAAgTgPg");
	this.shape_9.setTransform(137.7,167.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAcAAAPANQAPANAAAaIAAB+QAAA3g3AAgAgSBKIAXAAQAOAAAAgQIAAh4QAAgGgDgDQgCgDgJAAIgXAAg");
	this.shape_10.setTransform(116.3,167.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzBmQgSgPAAgdIAAiwIAzAAIAACuQAAAQASABQATgBAAgQIAAiuIAzAAIAACwQAAAdgRAPQgTARgiAAQghAAgSgRg");
	this.shape_11.setTransform(99.9,167.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAATARQASAQAAAcIAAB3QAAAcgSAQQgTARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_12.setTransform(83.6,167.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4B1IAAjpIA0AAIAAC/IA9AAIAAAqg");
	this.shape_13.setTransform(69.3,167.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBoQgSgPAAgbIAAh7QAAgbATgPQATgPAkAAQAZAAARAEIAAAvQgSgFgTAAQgSgBgEAFQgGAEAAAJIAABvQAAARAYAAQAbAAAPgFIAAAuQgUAFgYAAQgkAAgTgPg");
	this.shape_14.setTransform(55.6,167.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAcAAAPANQAPANAAAaIAAB+QAAA3g3AAgAgSBKIAXAAQAOAAAAgQIAAh4QAAgGgDgDQgDgDgIAAIgXAAg");
	this.shape_15.setTransform(249.1,138.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_16.setTransform(234.2,138.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBoQgTgPAAgbIAAh6QAAgaAUgRQAVgPAkAAQAeAAASAGIAAAxQgUgIgUAAQgTAAgHAEQgHAFAAAJIAABtQAAAJAFAEQAFAEAIAAQAKAAAGgDIAAhNIAxAAIAABwQgaAOglAAQgiAAgTgPg");
	this.shape_17.setTransform(219.3,138.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgB1IgKg2IgsAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_18.setTransform(203.2,138.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaB1Qgxh9gHgaQAGAZABBAIAAA+IgzAAIAAjpIAzAAIAcBPQAUAxAHAaQgIghAAg+IAAg7IAyAAIAADpg");
	this.shape_19.setTransform(185.9,138.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgB1IgKg2IgsAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhZg");
	this.shape_20.setTransform(168.5,138.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtB1IAAhSQAAggAGgjIggBaIgmAAIgghaQAHAggBAjIAABSIgwAAIAAjpIA0AAIApB2IAqh2IA1AAIAADpg");
	this.shape_21.setTransform(149.2,138.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGB1IAAirIglAbIAAg4IArghIAsAAIAADpg");
	this.shape_22.setTransform(126.2,138.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAB1IAIg+IgeAAIgIA+IgtAAIAJg+IgZAAIAAgoIAeAAIAFgdIgYAAIAAgoIAdAAIAJg+IArAAIgHA+IAeAAIAJg+IAtAAIgJA+IAXAAIAAAoIgdAAIgEAdIAXAAIAAAoIgdAAIgJA+gAgQAPIAeAAIAEgdIgdAAg");
	this.shape_23.setTransform(110.7,138.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_24.setTransform(87.4,138.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXB1IAAhdIgtAAIAABdIg0AAIAAjpIA0AAIAABhIAtAAIAAhhIA0AAIAADpg");
	this.shape_25.setTransform(71.4,138.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgrAAIAAC9g");
	this.shape_26.setTransform(55.4,138.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.4,-194.1,543,388.3);


(lib.TextBox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EAkrgQAMggAAf9MgpRAAAIAAn1ID5j4");
	this.shape.setTransform(72.9,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3).p("AxrR5ID5AAIAAkhIfT/U");
	this.shape_1.setTransform(-48.2,-64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("AvmPnIfN/N");
	this.shape_2.setTransform(202.8,-79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3).p("ASlGSIAAsUMglYAAA");
	this.shape_3.setTransform(-16.1,59.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAAQAAgZAbAAQAcAAAAAZQAAAagcAAQgbAAAAgag");
	this.shape_4.setTransform(86.6,84.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAjAAASARQASAQAAAcIAAB3QAAAcgSAQQgSARgjAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_5.setTransform(74.8,74.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgrAAIAAC9g");
	this.shape_6.setTransform(59.4,74.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_7.setTransform(39.6,74.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiB1IgtjpIA0AAIAWCGIAFA3QAFgxAGgoIAQhkIA1AAIgtDpg");
	this.shape_8.setTransform(23.9,74.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgB1IgKg2IgsAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhag");
	this.shape_9.setTransform(8.8,74.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXB1IAAhdIgtAAIAABdIg0AAIAAjpIA0AAIAABgIAtAAIAAhgIA0AAIAADpg");
	this.shape_10.setTransform(-8.6,74.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgrAAIAAC9g");
	this.shape_11.setTransform(-30.6,74.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAqIAOhTIAQAAQAVAAAAAUQAAANgKAQQgOAYgFAKg");
	this.shape_12.setTransform(-41.4,66);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaB1Qgwh8gJgdQAIAbAABAIAAA+IgzAAIAAjpIAzAAIAdBOQAUAyAGAYQgIggAAg9IAAg7IAzAAIAADpg");
	this.shape_13.setTransform(-53.5,74.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_14.setTransform(-70.4,74.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAcAAAPANQAPANAAAaIAAB+QAAA3g3AAgAgSBJIAXAAQAOAAAAgPIAAh4QAAgGgDgDQgDgEgIAAIgXAAg");
	this.shape_15.setTransform(-86.5,74.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzBnQgSgRAAgcIAAiwIAzAAIAACtQAAASASgBQATABAAgSIAAitIAzAAIAACwQAAAcgSARQgSAQgiAAQghAAgSgQg");
	this.shape_16.setTransform(-109.4,75.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQATgRAhAAQAjAAARARQATAQgBAcIAAB3QABAcgTAQQgRARgjAAQghAAgTgRgAgTg4IAABxQABARASAAQAUAAAAgRIAAhxQAAgRgUAAQgSAAgBARg");
	this.shape_17.setTransform(-125.7,74.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZB1IAAhJIg3igIA0AAIALAjQAOAsADAeQAHghAMgpIALgjIAzAAIg3CgIAABJg");
	this.shape_18.setTransform(-141.8,74.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_19.setTransform(84,46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBLAAQAdAAAOANQAQANAAAaIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgEQADgDAAgJIAAgmQAAgHgDgDQgEgDgFAAIgUAAg");
	this.shape_20.setTransform(69.1,46);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzBnQgSgRAAgcIAAiwIAzAAIAACtQAAASASgBQATABAAgSIAAitIAzAAIAACwQAAAcgSARQgRAQgjAAQghAAgSgQg");
	this.shape_21.setTransform(52.4,46.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhABvIAAgxQAYAKAdAAQAbAAAAgRIAAgFQAAgHgDgFQgDgDgJgGIgjgTQghgQAAgiIAAgVQAAgbATgPQATgPAgAAQAiAAARAHIAAAxQgVgIgaAAQgLAAgFADQgFAFAAAIIAAAFQAAAKADAEQADAFAJAFIAnAWQAcANAAAfIAAAVQAAAbgVAQQgUAOgjAAQglAAgTgIg");
	this.shape_22.setTransform(36.7,46);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_23.setTransform(16.4,46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARB1IgmhwIAABwIgzAAIAAjpIAzAAIAABqIAkhqIA3AAIgsBxIAvB4g");
	this.shape_24.setTransform(1.4,46);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgB1IgKg2IgsAAIgJA2IgxAAIAujpIBFAAIAuDpgAgPAUIAeAAIgPhag");
	this.shape_25.setTransform(-15.8,46);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAtB1IAAhSQAAghAHgiIghBZIglAAIghhZQAGAgABAjIAABSIgyAAIAAjpIA1AAIApB2IAqh2IA1AAIAADpg");
	this.shape_26.setTransform(-35.1,46);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_27.setTransform(-59,46);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWB1IgWicQAAAfgEAgIgPBdIgwAAIgfjpIAtAAQAMBVACAXIADAgIARiMIApAAIAQCKQABggAFgdIALhNIAsAAIggDpg");
	this.shape_28.setTransform(-76.5,46);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATARAAAbIAAB3QAAAbgTARQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_29.setTransform(-100.9,46);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhABvIAAgxQAZAKAcAAQAbAAAAgRIAAgFQAAgHgDgFQgEgDgIgGIgigTQgigQAAgiIAAgVQABgbARgPQATgPAhAAQAiAAARAHIAAAxQgVgIgaAAQgLAAgGADQgEAGAAAHIAAAFQgBAJAEAFQACAEAKAGIAnAWQAcANgBAfIAAAVQAAAbgTAQQgWAOgiAAQgkAAgUgIg");
	this.shape_30.setTransform(-116.5,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-181.1,472.1,282.7);


(lib.TextBox1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("ALyOhIQowmIAAn1IuIAAIAAkhI6BAAIwuQs");
	this.shape.setTransform(-53.8,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3).p("AIWoVIwrQr");
	this.shape_1.setTransform(-182.4,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("Az8mRIAAMUMAoIAAA");
	this.shape_2.setTransform(-1.2,-60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAAQAAgZAbAAQAcAAAAAZQAAAagcAAQgbAAAAgag");
	this.shape_3.setTransform(113.8,-37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_4.setTransform(103.1,-46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtB1IAAhSQAAggAHgjIghBZIglAAIghhZQAGAeAAAlIAABSIgwAAIAAjpIA0AAIApB2IAqh2IA1AAIAADpg");
	this.shape_5.setTransform(85.2,-46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYB1IAAjpIAxAAIAADpg");
	this.shape_6.setTransform(70.6,-46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYB1IAAi9IgrAAIAAgsICHAAIAAAsIgrAAIAAC9g");
	this.shape_7.setTransform(59.5,-46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaB1Qgxh/gHgaQAHAcAAA/IAAA+IgzAAIAAjpIAzAAIAdBPQATAvAHAZQgIggAAg8IAAg7IAzAAIAADpg");
	this.shape_8.setTransform(43.5,-46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWB1IgVicQgCApgEAWIgOBdIgxAAIgdjpIAsAAQAOBiAAAKIACAgIARiMIAqAAIAQCKQACgdAEggIALhNIAsAAIggDpg");
	this.shape_9.setTransform(24.5,-46.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_10.setTransform(6.2,-46.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAbAAAQANQAPANAAAaIAAB+QAAA3g3AAgAgSBJIAXAAQAOAAAAgPIAAh4QAAgGgDgDQgEgEgHAAIgXAAg");
	this.shape_11.setTransform(-9.9,-46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFB1IAAjpIBRAAQAbAAAQANQAPANAAAaIAAB+QAAA3g3AAgAgSBJIAXAAQAOAAAAgPIAAh4QAAgGgDgDQgEgEgHAAIgXAAg");
	this.shape_12.setTransform(-32.7,-46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQB1IgehVIgGAAIAABVIgzAAIAAjpIBLAAQAcAAAPANQAQAOAAAZIAAArQAAAngcAKIAlBZgAgUgGIAUAAQAGAAADgEQADgDAAgIIAAgnQAAgHgDgDQgEgDgFAAIgUAAg");
	this.shape_13.setTransform(-48.7,-46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_14.setTransform(-65.3,-46.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5B1IAAjpIBzAAIAAAsIg/AAIAAA6IA6AAIAAAsIg6AAIAABXg");
	this.shape_15.setTransform(-79.9,-46.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5B1IAAjpIBzAAIAAAsIg/AAIAAA6IA6AAIAAAsIg6AAIAABXg");
	this.shape_16.setTransform(-93.3,-46.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAhB1IgLg2IgsAAIgJA2IgxAAIAvjpIBFAAIAtDpgAgPAUIAeAAIgPhZg");
	this.shape_17.setTransform(-109,-46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaB1Qgxh/gIgaQAIAcAAA/IAAA+IgzAAIAAjpIAzAAIAcBPQAVAxAGAZQgIgjAAg7IAAg7IAyAAIAADpg");
	this.shape_18.setTransform(16.8,-75.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhB1IgLg2IgsAAIgJA2IgxAAIAujpIBGAAIAtDpgAgPAUIAeAAIgPhZg");
	this.shape_19.setTransform(-0.5,-75.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoBpQgSgPAAgcIAAh7QAAgaATgQQASgPAlAAQAXAAATAFIAAAvQgSgGgTAAQgSAAgEAEQgGAFAAAIIAABwQAAAQAYAAQAZABARgGIAAAuQgRAFgbAAQgkAAgTgOg");
	this.shape_20.setTransform(-16,-75.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag6B1IAAjpIB1AAIAAAsIhCAAIAAAyIA5AAIAAAqIg5AAIAAA1IBCAAIAAAsg");
	this.shape_21.setTransform(-36,-75.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaB1Qgwh8gJgdQAIAbAABAIAAA+IgzAAIAAjpIAzAAIAdBPQATAvAHAZQgIggAAg8IAAg7IAzAAIAADpg");
	this.shape_22.setTransform(-51.9,-75.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAATARQASAQAAAcIAAB3QAAAcgSAQQgTARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_23.setTransform(-68.8,-75.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag0BoQgSgQAAgcIAAh3QAAgcASgQQASgRAiAAQAiAAASARQATAQAAAcIAAB3QAAAcgTAQQgSARgiAAQgiAAgSgRgAgTg4IAABxQAAARATAAQAUAAAAgRIAAhxQAAgRgUAAQgTAAAAARg");
	this.shape_24.setTransform(-91.4,-75.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZB1Qgwh/gHgaQAGAcAAA/IAAA+IgxAAIAAjpIAxAAIAeBPQAUAxAGAZQgIgjAAg7IAAg7IAzAAIAADpg");
	this.shape_25.setTransform(-108.2,-75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,-102.1,367.1,189);


(lib.RSLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAjQgGgIAAgNQgBgYASgTQAPgOASAAQAQAAAHAJQAJALgEATIgJAuIgZAAIABgEQABgDAEgGIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAIAAAAQgCAGgEAEQgGAHgLAAQgMAAgGgJgAgCgTQgMAMAAAQQAAAPAJAAQAFAAAGgHQAFgHACgKIACgHIAAgIQAAgJgJAAQgFAAgDAFg");
	this.shape.setTransform(23.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAjQgKgLAAgPQAAgVAQgPQAQgQAWAAQALAAAGADIgEAVQgFgEgJAAQgNAAgGAKQgIAJAAAKQAAASAPAAQAKAAALgGIgEAVQgKAFgNAAQgPAAgKgJg");
	this.shape_1.setTransform(31.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAHQgDgDABgEQAAgDADgDQAEgDACAAQAFAAADADQADADgBADQAAAEgDADQgEADgDAAQgEAAgDgDgAgFgFQgDACAAADQgBAJAJAAQACAAAEgDQADgCAAgEQABgCgDgEQgDgCgEAAQgBAAgEADgAABAGIgBgFIgBAAIgBAFIgCAAIADgLIADAAQABAAABABQAAAAAAAAQABABAAAAQAAAAAAABIAAABQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIACAGgAAAAAIAAAAIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCAAg");
	this.shape_2.setTransform(43.9,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAjQgKgKAAgRQAAgSANgQQAPgRAUAAQANAAAIAHQAIAHAAAMQAAALgGAGQgMAJgdAAQgEAAgDgEIAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAIAAAAQAEADAAADIACAFQAFAGAJAAQAQAAAOgIIAAAAIgEAVQgOAHgQAAQgSAAgJgJgAgJgNQgCAEgDACIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAgBIABAAQACgDAGAAQANgBAFgEQACgCAAgDQAAgIgJAAQgKAAgGAMg");
	this.shape_3.setTransform(38.9,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAsIAAgBIAQhUIAUAAIgBAGQAAAHgDADIAAABIAAACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAAAQACgGAEgEQAIgKAMAAIAFABIgFAYIgEAAQgVAAgDAdIgHAgIAAABg");
	this.shape_4.setTransform(-21.9,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHA5IgTgtIgBAAIgIAtIAAAAIgZAAIAAAAIAWhxIAYAAIgMBCIAfgkIAcAAIgjAlIAWAuIAAAAg");
	this.shape_5.setTransform(0.5,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA5IAVhvIAXAAIgBADQgBAGgDAEIgBAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAAAIAFgJIAAAAQAJgIAKAAQANAAAIAJQAHAJAAAOQAAARgHAMQgIAOgNAIQgTAKgMgKIgCgFIAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgBACIAAABQACAEgBABIgEAdgAAAgbQgFAGgDANQgEAUAMAAQAHAAAHgMQAHgIgBgOQAAgNgKAAQgGAAgEAIg");
	this.shape_6.setTransform(14.8,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAjQgGgIAAgNQAAgaASgRQAOgOATAAQAPAAAHAJQAJALgEATIgJAuIgYAAIAAgEQACgFADgEIAAgBIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAAAQgCAHgDADQgHAHgLAAQgMAAgGgJgAgCgTQgMAMAAAQQAAAPAJAAQAFAAAGgHQAFgHACgKIADgPQgBgJgIAAQgGAAgDAFg");
	this.shape_7.setTransform(-15.4,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAjQgKgKAAgQQAAgVAQgPQAQgQAWAAQAKAAAHADIgEAVIAAAAQgGgEgIAAQgNAAgGAKQgIAJAAAKQABASAOAAQALAAAKgGIgEAVQgJAFgOAAQgPAAgKgJg");
	this.shape_8.setTransform(-7.3,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAlIADgTQALAHAOAAQAJAAAAgHQAAgGgJgFQgSgHAAgOQAAgNAKgIQALgIAPAAQANAAAIAEIgDATQgKgEgKAAQgLAAAAAHQAAAFALAFQATAHAAAOQAAAMgIAIQgLAKgSAAQgTgBgHgGg");
	this.shape_9.setTransform(7.3,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBWQgBgfAMgWQAKgRANACQANABAJATQAGANABASIAAABIAKgHIAAgBQgKgaACgZQAEggAegqQgVgRgiAFIAAgBIALgMQAegCAWASQAWATACAgQACAhgZAgQgZAggjAKQgNADgLAAQgMAAgMgDg");
	this.shape_10.setTransform(-33.4,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3A/QgLgQgCgUIAAAAQgCgiAZggQAZggAkgKQAcgHAZAKQgEANgKAOQgIANgLAGQgKAHgGgDQgHgCACgLQABgLAIgMIAIgKIgKACIgBAAQgZAhgNApQgMApABApQgRgHgKgOgAAZgzQgCAGAAAEQABAEAEAAQAEAAAFgEQAFgEACgGQADgFgBgEQgBgEgEAAQgJAAgHANg");
	this.shape_11.setTransform(-38.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-9.8,90,19.7);


(lib.ButtonLearnMore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{btn:0,btn_static:19,"btn_static":20,btn_hover:32});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(12).call(this.frame_31).wait(13).call(this.frame_44).wait(1));

	// PLACEMENT ONLY
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(2).p("AINiLIAKAAAINCMIAKAAAINiLIAAEXAoWiLIAKAAIAAEXIQZAAAoWCMIAKAAAoMiLIQZAA");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAwIAAhfIAvAAIAAASIgaAAIAAAVIAWAAIAAAQIgWAAIAAAWIAaAAIAAASg");
	this.shape_1.setTransform(35.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAwIgLgjIgCAAIAAAjIgVAAIAAhfIAdAAQAMAAAGAGQADACACAEQACAEAAAGIAAASQAAAHgDAEQgDAFgGADIAPAkgAgHgCIAHAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAgQQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgHAAg");
	this.shape_2.setTransform(27.6,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAwQgGgCgDgEQgEgDgCgFQgCgEAAgGIAAgvQAAgGACgEQACgGAEgCQAHgIANAAQAOAAAHAIQAEACACAGQACAEAAAGIAAAvQAAAGgCAEQgCAFgEADQgDAEgGACQgFABgHAAQgGAAgFgBgAgHgWIAAAtQAAADACADQACABADAAQAEAAACgBQACgDAAgDIAAgtQAAgEgCgCQgCgBgEAAQgHAAAAAHg");
	this.shape_3.setTransform(19.1,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAwIAAgiQgBgOADgNIgNAkIgOAAIgOgkQADARAAAKIAAAiIgVAAIAAhfIAWAAIAQAwIARgwIAVAAIAABfg");
	this.shape_4.setTransform(9.7,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAwIgWg+QADALAAAZIAAAaIgUAAIAAhfIAUAAIALAhQAIASACAKIABABIgBgBIgBgOIgBgWIAAgZIAUAAIAABfg");
	this.shape_5.setTransform(-4.1,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAwIgLgjIgCAAIAAAjIgVAAIAAhfIAdAAQAMAAAGAGQADACACAEQACAEAAAGIAAASQAAAHgDAEQgDAFgGADIAPAkgAgHgCIAHAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAgQQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgHAAg");
	this.shape_6.setTransform(-12.4,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAwIgEgXIgRAAIgEAXIgUAAIAUhfIAbAAIASBfgAAGAIIgGgkIgFAkIALAAg");
	this.shape_7.setTransform(-20.9,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAwIAAhfIAvAAIAAASIgaAAIAAAVIAWAAIAAAQIgWAAIAAAWIAaAAIAAASg");
	this.shape_8.setTransform(-28.6,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAwIAAhfIAVAAIAABOIAYAAIAAARg");
	this.shape_9.setTransform(-35.6,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C40022").s().p("AgXAwIAAhfIAvAAIAAASIgaAAIAAAVIAWAAIAAAQIgWAAIAAAWIAaAAIAAASg");
	this.shape_10.setTransform(35.3,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C40022").s().p("AAGAwIgLgjIgCAAIAAAjIgVAAIAAhfIAdAAQAMAAAGAGQADACACAEQACAEAAAGIAAASQAAAHgDAEQgDAFgGADIAPAkgAgHgCIAHAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAgQQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgHAAg");
	this.shape_11.setTransform(27.6,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C40022").s().p("AgLAwQgGgCgDgEQgEgDgCgFQgCgEAAgGIAAgvQAAgGACgEQACgGAEgCQAHgIANAAQAOAAAHAIQAEACACAGQACAEAAAGIAAAvQAAAGgCAEQgCAFgEADQgDAEgGACQgFABgHAAQgGAAgFgBgAgHgWIAAAtQAAADACADQACABADAAQAEAAACgBQACgDAAgDIAAgtQAAgEgCgCQgCgBgEAAQgHAAAAAHg");
	this.shape_12.setTransform(19.1,-0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C40022").s().p("AATAwIAAgiQgBgOADgNIgNAkIgOAAIgOgkQADARAAAKIAAAiIgVAAIAAhfIAWAAIAQAwIARgwIAVAAIAABfg");
	this.shape_13.setTransform(9.7,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C40022").s().p("AAKAwIgWg+QADALAAAZIAAAaIgUAAIAAhfIAUAAIALAhQAIASACAKIABABIgBgBIgBgOIgBgWIAAgZIAUAAIAABfg");
	this.shape_14.setTransform(-4.1,-0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C40022").s().p("AAGAwIgLgjIgCAAIAAAjIgVAAIAAhfIAdAAQAMAAAGAGQADACACAEQACAEAAAGIAAASQAAAHgDAEQgDAFgGADIAPAkgAgHgCIAHAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAgQQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgHAAg");
	this.shape_15.setTransform(-12.4,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C40022").s().p("AANAwIgEgXIgRAAIgEAXIgUAAIAUhfIAbAAIASBfgAAGAIIgGgkIgFAkIALAAg");
	this.shape_16.setTransform(-20.9,-0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C40022").s().p("AgXAwIAAhfIAvAAIAAASIgaAAIAAAVIAWAAIAAAQIgWAAIAAAWIAaAAIAAASg");
	this.shape_17.setTransform(-28.6,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C40022").s().p("AgWAwIAAhfIAVAAIAABOIAYAAIAAARg");
	this.shape_18.setTransform(-35.6,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},19).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},12).wait(1));

	// Left
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AAAgQIAAAh");
	this.shape_19.setTransform(-52.5,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2).p("AAAApIAAhS");
	this.shape_20.setTransform(-52.5,8.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2).p("AAABCIAAiD");
	this.shape_21.setTransform(-52.5,6.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2).p("AAABbIAAi1");
	this.shape_22.setTransform(-52.5,4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2).p("AAABzIAAjl");
	this.shape_23.setTransform(-52.5,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2).p("AAAiLIAAEX");
	this.shape_24.setTransform(-52.5,-0.9);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},14).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},11).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(19).to({_off:false},0).wait(26));

	// Bottom
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(2).p("AgUAAIApAA");
	this.shape_25.setTransform(51.4,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2).p("Ah6AAID1AA");
	this.shape_26.setTransform(41.1,13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(2).p("AjhAAIHDAA");
	this.shape_27.setTransform(30.9,13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2).p("AlIAAIKRAA");
	this.shape_28.setTransform(20.6,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(2).p("AmvAAINfAA");
	this.shape_29.setTransform(10.3,13);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2).p("AoWAAIQtAA");
	this.shape_30.setTransform(0,13);
	this.shape_30._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},9).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},11).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(14).to({_off:false},0).wait(31));

	// Right
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2).p("AAAgRIAAAj");
	this.shape_31.setTransform(52.5,-13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2).p("AAAAqIAAhU");
	this.shape_32.setTransform(52.5,-10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(2).p("AAABDIAAiF");
	this.shape_33.setTransform(52.5,-8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2).p("AAABbIAAi1");
	this.shape_34.setTransform(52.5,-5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(2).p("AAABzIAAjl");
	this.shape_35.setTransform(52.5,-3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(2).p("AAAiLIAAEX");
	this.shape_36.setTransform(52.5,-0.9);
	this.shape_36._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},4).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},10).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},11).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(9).to({_off:false},0).wait(36));

	// Top
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(2).p("AgJAAIATAA");
	this.shape_37.setTransform(-52.5,-15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(2).p("AiMAAIEZAA");
	this.shape_38.setTransform(-39.3,-15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2).p("AkPAAIIfAA");
	this.shape_39.setTransform(-26.2,-15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(2).p("AmSAAIMlAA");
	this.shape_40.setTransform(-13.1,-15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2).p("AoWAAIQtAA");
	this.shape_41.setTransform(0,-15);
	this.shape_41._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},15).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},11).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(4).to({_off:false},0).wait(41));

	// Background
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AsWC5IAAlwIYsAAIAAFwg");
	this.shape_42.setTransform(0,-1.2,0.661,0.755);
	this.shape_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(32).to({_off:false},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-16,109,30);


(lib.btn_rollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-150,-125,300,250);
	this.shape.setTransform(-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-124.9,300,250);


(lib.Bullets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAhQgHgCgEgFQgHgJAAgRQAAgQAIgKQADgEAHgCQAGgCAIAAQAJAAAGACQAIACADAEQAHAKAAAQQAAARgHAJQgHAJgTAAQgIAAgGgCgAgMgZQgGABgCAFIgDAIIAAALIAAAMQABAEACAEQADAEAFACQAFACAHgBQAHABAGgCQAFgCACgEQADgEABgEIAAgMIAAgLQgBgEgDgEQgCgFgFgBQgFgBgIgBQgHABgFABgAAHAUIgGgPIgBAAIgDAAIAAAPIgIAAIAAgoIALAAQAHAAADADQAEADAAAHQAAAFgCACQgBABgCACIAGARgAgDAAIADAAQACAAACgBQACgCAAgEQAAgEgCgBIgEgBIgDAAg");
	this.shape.setTransform(71.3,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_1.setTransform(64.2,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAuIAAhaIAPAAIAAAGIABgBIABgBIABgBIABgBIACgBIACAAIABgBIACAAIAFgBIAEAAIAAAPIgFAAQgIAAgHAGIAABGg");
	this.shape_2.setTransform(60,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAuQgFgCgDgEQgHgGAAgMIAAgrQAAgGACgFQABgEAEgEQADgCAFgCQAFgCAGAAQANAAAHAGQADAEACAEQACAFAAAGIAAArQAAAMgHAGQgEAEgFACQgFABgGAAQgGAAgFgBgAgIgeQgDADAAAGIAAAqQAAAHADADQADADAFAAQAFAAAEgDQADgDAAgHIAAgqQAAgMgMAAQgFAAgDADg");
	this.shape_3.setTransform(53.7,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA6IAAhyIAOAAIAAAEQAJgFAHAAQAKAAAGAGQADACABAEQABAEABAFIAAAuQgBAGgBAEQgBAFgEADQgHAGgLAAIgNAAIAAAYgAgLgnIAAA7IALAAQALAAAAgMIAAgpQABgFgDgCQgDgDgFAAQgFAAgHAEg");
	this.shape_4.setTransform(46.6,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA6IAAhyIAOAAIAAAEQAJgFAHAAQAKAAAGAGQADACABAEQABAEABAFIAAAuQgBAGgBAEQgBAFgEADQgHAGgLAAIgNAAIAAAYgAgLgnIAAA7IALAAQALAAAAgMIAAgpQABgFgDgCQgDgDgFAAQgFAAgHAEg");
	this.shape_5.setTransform(39.4,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAoIgEgHQgBgEgBgGIAAhEIAQAAIAABCQAAAGACACQADADAFAAQAFAAAGgEIAAhJIAPAAIAABaIgNAAIAAgEIgJADQgEACgEAAQgKAAgGgGg");
	this.shape_6.setTransform(32.1,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAzIAAgOQAKAEAMAAQAGAAAFgDQAEgDAAgGIAAgGQABgEgCgDQgCgDgFgCIgQgKQgHgCgEgGQgEgFAAgIIAAgKQAAgLAIgGQAEgDAFgCQAFgCAGAAQANAAAIADIAAAPQgIgEgMAAQgNAAAAALIAAAHQAAAFACADQACADAFADIAQAIQAOAHAAAOIAAAJQgBAMgHAGQgFADgFACQgGACgGAAQgPAAgIgEg");
	this.shape_7.setTransform(25.3,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_8.setTransform(17.4,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIADgHQAGgEAKgCIASgGIAAgMQAAgGgCgDQgEgCgJAAQgJAAgKADIAAgOIALgCIALgBQAbAAAAAZIAABCIgPAAIAAgHQgDAEgFACQgEABgEAAQgWAAAAgWgAAAAHQgHACgCACQgCADAAAFIAAAFQAAAFADADQACADAGAAQAHAAAFgFIAAgbg");
	this.shape_9.setTransform(12,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAoQgGgGAAgMIAAgrQAAgMAGgGQAIgHAMABQAJAAAJACIAAAOQgJgCgIgBQgGAAgDADQgEADAAAGIAAApQAAAGAEADQADACAHAAQAIAAAIgCIAAAOQgKACgIAAQgMAAgIgGg");
	this.shape_10.setTransform(6,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA6IAAhZIANAAIAABZgAgIgxQABgIAHAAQAEAAACACQADACgBAEQABAFgDACQgCACgEAAQgHAAgBgJg");
	this.shape_11.setTransform(1.1,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_12.setTransform(-3.1,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIAEgHQAEgEALgCIATgGIAAgMQAAgGgDgDQgEgCgJAAQgJAAgJADIAAgOIAKgCIALgBQAbAAAAAZIAABCIgOAAIAAgHQgEAEgFACQgEABgEAAQgWAAAAgWgAgBAHQgGACgCACQgCADAAAFIAAAFQAAAFACADQADADAGAAQAGAAAHgFIAAgbg");
	this.shape_13.setTransform(-9,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_14.setTransform(-15.8,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIADgHQAGgEAKgCIASgGIAAgMQAAgGgCgDQgEgCgJAAQgJAAgKADIAAgOIALgCIALgBQAbAAAAAZIAABCIgPAAIAAgHQgDAEgFACQgEABgEAAQgWAAAAgWgAAAAHQgHACgCACQgCADAAAFIAAAFQAAAFADADQACADAGAAQAHAAAFgFIAAgbg");
	this.shape_15.setTransform(-23.1,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA2IAAhrIAuAAIAAAOIgeAAIAAAkIAcAAIAAALIgcAAIAAAug");
	this.shape_16.setTransform(-29,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA1IgKgCIAAgPQAHADANABQAIAAADgDQAEgDAAgFIAAgQQAAgGgEgDQgCgDgGAAIgXACIAAg4IAuAAIAAAOIgfAAIAAAdIAKAAQAMAAAHAGQADADABACQABAFAAAGIAAASQAAAGgBAEQgCAFgEADQgEADgFABQgFACgFAAg");
	this.shape_17.setTransform(-38.7,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLA2QgFgCgEgEQgDgDgCgGQgBgEAAgGIAAg4QAAgMAHgHQAEgEAFgCQAGgCAFAAIAMABIAKACIAAAPQgIgEgNAAQgNAAAAAOIAAAQQAGgEAJAAQAKABAHAGQADADACAEQABADAAAGIAAAUQAAAGgBAEQgCAGgDADQgHAHgOAAQgGAAgFgBgAgLABIAAAbQAAAHADADQADAEAFAAQAGAAADgEQADgDAAgHIAAgTQAAgFgDgDQgDgBgGAAQgGAAgFABg");
	this.shape_18.setTransform(-45.6,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAzIAAgOIAKADIAKABQAJAAADgDQAEgDgBgGIAAgKQABgGgEgDQgDgEgFAAIgLAAIAAgLIALAAQAFAAADgEQADgDgBgHIAAgJQAAgGgCgDQgEgDgIAAQgKAAgHADIAAgOQAHgDALAAQAOAAAHAHQAIAGAAAMIAAALQAAAPgLADQALACABAPIAAANQAAAGgCAFQgCAEgFADQgDADgGACQgFACgFAAQgOAAgJgEg");
	this.shape_19.setTransform(-52.6,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAuIgMggIgLAgIgQAAIAUguIgUgsIAQAAIALAeIAMgeIAQAAIgVAsIAVAug");
	this.shape_20.setTransform(-58.6,16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIA2IAAgRQAAgLADgLQACgLADgLIAIggIggAAIAAgOIAxAAIAAAMIgLAkQgJAWAAAVIAAAQg");
	this.shape_21.setTransform(-64.5,15.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAuIgMggIgLAgIgQAAIAUguIgUgsIAQAAIALAeIAMgeIAQAAIgVAsIAVAug");
	this.shape_22.setTransform(-70.1,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAHA2IAAgUIgmAAIAAgOIAfhJIAVAAIAABKIALAAIAAANIgLAAIAAAUgAgRAVIAZAAIAAg7g");
	this.shape_23.setTransform(-76.5,15.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZA2IAAgYQAAgJAEgGQAEgGAIgGIAMgJQAFgDABgDQACgEAAgGIAAgGQAAgGgDgCQgEgDgIAAQgKAAgJAEIAAgPQAGgCAPgBQAcAAAAAYIAAAJQAAAJgDAFQgDAGgGADIgNAJQgGAGgCADQgCAEAAAGIAAAKIAjAAIAAANg");
	this.shape_24.setTransform(-83.2,15.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_25.setTransform(-91.4,15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEA9QgSAAgJgFIAAgPQAGAEAGACQAHABAHABIAFAAQAIAAAEgCQAEgDAAgEIAAgCQAAgEgCgCQgCgBgGAAIgHAAQgVgBAAgOIAAgCQAAgFACgCQACgDAFAAQgJgDgEgEQgEgFAAgJIAAgNQAAgLAHgHQAHgGANAAQAKAAAHAEQACgFADgDQAEgCAGAAIADAAIAAANIgGAAQgEABgCABQACADABADIABAJIAAANQAAALgGAGQgEACgFABQgFABgFAAQgEAAgCACQgCACAAAEQAAADACABQACACAFAAIAIAAQALAAAGAEQAGAFAAAKIAAADQAAAVgfAAgAgMgnQgDADAAAGIAAAMQAAAHADACQADADAHAAQAFAAADgDQADgCAAgHIAAgMQAAgGgDgDQgDgCgFAAQgHAAgDACg");
	this.shape_26.setTransform(91.9,-3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_27.setTransform(84.6,-4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA6IAAhZIANAAIAABZgAgIgxQAAgIAIAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgIAAAAgJg");
	this.shape_28.setTransform(79.2,-5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_29.setTransform(75,-4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAsIAAgOQAIADAKgBQAJABADgDQAEgDAAgFIAAgCQAAgFgCgCQgCgCgGgDIgLgGQgGgCgDgFQgEgFAAgHIAAgFQAAgGACgEQABgFAEgDQAHgFANgBQALAAAHAEIAAANQgIgDgIAAQgIAAgDACQgDADAAAFIAAAEQAAAEACACIAHAGIALAGQAOAGAAANIAAADQAAAZgdAAQgKgBgKgCg");
	this.shape_30.setTransform(69.8,-4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAuQgFgCgDgEQgHgHAAgLIAAgrQAAgGACgEQABgFAEgEQADgCAFgDQAFgBAGAAQANAAAHAGQADAEACAFQACAEAAAGIAAArQAAALgHAHQgEAEgFACQgFABgGAAQgGAAgFgBgAgIgeQgDADAAAGIAAAqQAAAHADADQADADAFAAQAFAAAEgDQADgDAAgHIAAgqQAAgMgMAAQgFAAgDADg");
	this.shape_31.setTransform(63.3,-4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA6IAAhDQAAgKgJAAQgGAAgGAEIAABJIgPAAIAAhzIAPAAIAAAcIAIgDIAHgBQAKAAAFAGQADACACAEQABAEAAAFIAABGg");
	this.shape_32.setTransform(56.1,-5.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNA5QgFgCgCgDQgDgDgBgEIgBgKIAAgqQAAgMAGgHQAHgHAMAAIALAAIAAgYIAQAAIAABzIgQAAIAAgGQgGAGgJAAQgFAAgEgBgAgHgQQgDADAAAGIAAAoQgBAMALgBQAGABAFgFIAAg7IgLAAQgEAAgDADg");
	this.shape_33.setTransform(45.8,-5.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAoQgIgGABgNIAAgqQAAgFABgFQABgFAEgDQADgDAFgCQAGgCAFAAQAOAAAGAHIAFAIQACAFAAAFIAAAcIgmAAIAAAOQAAAGAEADQAEADAHAAQAKAAAKgDIAAAOQgKADgLAAQgNAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgFAAgDADg");
	this.shape_34.setTransform(38.9,-4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_35.setTransform(32.9,-4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIADgHQAGgEAKgCIASgGIAAgMQAAgGgDgDQgDgCgJAAQgJAAgKADIAAgOIALgCIALgBQAbAAAAAZIAABCIgPAAIAAgHQgDAEgFACQgEABgEAAQgWAAAAgWgAAAAHQgHACgCACQgCADAAAFIAAAFQAAAFADADQACADAGAAQAHAAAFgFIAAgbg");
	this.shape_36.setTransform(26.9,-4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPAoQgGgGAAgMIAAgrQAAgMAGgGQAIgHAMAAQAKAAAIADIAAAOQgJgDgIABQgGAAgDACQgEADAAAGIAAApQAAAGAEADQADADAHgBQAIABAIgDIAAAOQgKACgIABQgMgBgIgGg");
	this.shape_37.setTransform(20.9,-4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGA6IAAhZIANAAIAABZgAgIgxQABgIAHAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgHAAgBgJg");
	this.shape_38.setTransform(16.1,-5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNA5QgEgCgDgDQgDgDgCgEIgBgKIAAgqQAAgMAHgHQAHgHAMAAIALAAIAAgYIAPAAIAABzIgOAAIAAgGQgHAGgJAAQgFAAgEgBgAgIgQQgCADgBAGIAAAoQAAAMALgBQAGABAFgFIAAg7IgLAAQgEAAgEADg");
	this.shape_39.setTransform(10.7,-5.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgBgNIAAgqQABgFABgFQACgFADgDQAEgDAFgCQAFgCAFAAQANAAAHAHIAFAIQACAFgBAFIAAAcIglAAIAAAOQAAAGAEADQAEADAIAAQAJAAAKgDIAAAOQgKADgKAAQgOAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgEAAgEADg");
	this.shape_40.setTransform(3.7,-4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNA5QgFgCgCgDQgDgDgCgEIgBgKIAAgqQABgMAGgHQAHgHAMAAIALAAIAAgYIAPAAIAABzIgPAAIAAgGQgGAGgJAAQgFAAgEgBgAgIgQQgCADAAAGIAAAoQAAAMAKgBQAHABAEgFIAAg7IgLAAQgEAAgEADg");
	this.shape_41.setTransform(-3.5,-5.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_42.setTransform(-12.5,-4.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_43.setTransform(-18.4,-4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIAEgHQAEgEALgCIATgGIAAgMQAAgGgDgDQgEgCgJAAQgJAAgJADIAAgOIAKgCIALgBQAbAAAAAZIAABCIgOAAIAAgHQgEAEgFACQgEABgEAAQgWAAAAgWgAgBAHQgGACgCACQgCADAAAFIAAAFQAAAFACADQADADAGAAQAGAAAHgFIAAgbg");
	this.shape_44.setTransform(-25.7,-4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_45.setTransform(-32.5,-4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAoQgIgGABgNIAAgqQAAgFABgFQACgFADgDQAEgDAEgCQAGgCAFAAQAOAAAGAHIAFAIQACAFAAAFIAAAcIgmAAIAAAOQAAAGAEADQAEADAHAAQALAAAJgDIAAAOQgKADgLAAQgNAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgFAAgDADg");
	this.shape_46.setTransform(-39.5,-4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_47.setTransform(-45.5,-4.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_48.setTransform(-49.8,-4.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgBgNIAAgqQABgFABgFQACgFADgDQAEgDAFgCQAFgCAFAAQANAAAHAHIAFAIQACAFgBAFIAAAcIglAAIAAAOQAAAGAEADQAEADAIAAQAJAAAKgDIAAAOQgKADgKAAQgOAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgEAAgEADg");
	this.shape_49.setTransform(-55.2,-4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_50.setTransform(-60.5,-5.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEA9QgSAAgJgFIAAgPQAGAEAGACQAHABAHABIAFAAQAIAAAEgCQAEgDAAgEIAAgCQAAgEgCgCQgCgBgGAAIgHAAQgVgBAAgOIAAgCQAAgFACgCQACgDAFAAQgJgDgEgEQgEgFAAgJIAAgNQAAgLAHgHQAHgGANAAQAKAAAHAEQACgFADgDQAEgCAGAAIADAAIAAANIgGAAQgEABgCABQACADABADIABAJIAAANQAAALgGAGQgEACgFABQgFABgFAAQgEAAgCACQgCACAAAEQAAADACABQACACAFAAIAIAAQALAAAGAEQAGAFAAAKIAAADQAAAVgfAAgAgMgnQgDADAAAGIAAAMQAAAHADACQADADAHAAQAFAAADgDQADgCAAgHIAAgMQAAgGgDgDQgDgCgFAAQgHAAgDACg");
	this.shape_51.setTransform(-65.7,-3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_52.setTransform(-73,-4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGA6IAAhZIANAAIAABZgAgIgxQABgIAHAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgHAAgBgJg");
	this.shape_53.setTransform(-78.3,-5.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaAzIAAgOQALAEAMAAQAHAAAEgDQAEgDABgGIAAgGQAAgEgCgDQgCgDgFgCIgQgKQgHgCgEgGQgEgFAAgIIAAgKQAAgLAIgGQAEgDAFgCQAFgCAGAAQANAAAIADIAAAPQgIgEgMAAQgNAAAAALIAAAHQAAAFACADQACADAFADIAQAIQAOAHAAAOIAAAJQgBAMgHAGQgFADgFACQgGACgGAAQgOAAgKgEg");
	this.shape_54.setTransform(-83.3,-4.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_55.setTransform(-91.4,-4.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGAxQgFgGAAgLIAAg4IgKAAIAAgNIAKAAIAFgQIAIAAIAAAQIASAAIAAANIgSAAIAAA3QAAAKAJAAQAFAAAGgCIAAANIgCABIgDAAIgIABQgJAAgGgFg");
	this.shape_56.setTransform(78.2,-25.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AALAuIAAhDQAAgKgJAAQgFAAgHAEIAABJIgPAAIAAhaIAOAAIAAAEIAKgDIAHgCQAJAAAGAGQADACABAEIABAJIAABGg");
	this.shape_57.setTransform(72.3,-24.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgBgNIAAgqQABgFABgFQACgFADgDQADgDAGgCQAEgCAGAAQANAAAHAHIAFAIQABAFAAAFIAAAcIglAAIAAAOQAAAGAEADQAEADAIAAQAKAAAJgDIAAAOQgKADgLAAQgNAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgEAAgEADg");
	this.shape_58.setTransform(65.3,-24.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAeAuIAAhDQAAgKgJAAIgIABIgHAEIABAFIAABDIgNAAIAAhDQAAgKgKAAQgHAAgHAEIAABJIgPAAIAAhaIAPAAIAAAEIAKgDQAEgCAFAAQAJAAAEAHQALgHAKAAQALAAAGAGQADACABAEQACAEAAAFIAABGg");
	this.shape_59.setTransform(56.2,-24.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgSAoQgIgGAAgNIAAgqQAAgFACgFQABgFAEgDQAEgDAEgCQAFgCAGAAQANAAAHAHIAFAIQABAFAAAFIAAAcIglAAIAAAOQAAAGAEADQAEADAIAAQAKAAAJgDIAAAOQgKADgKAAQgOAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgFAAgDADg");
	this.shape_60.setTransform(47.2,-24.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPAoQgGgGgBgMIAAgrQABgMAGgGQAIgGALgBQALABAHACIAAAOQgHgCgJAAQgGAAgEACQgDADAAAGIAAApQAAAGADADQAEACAHAAQAIAAAHgCIAAAOQgIADgKAAQgLAAgIgHg");
	this.shape_61.setTransform(40.9,-24.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIAEgHQAFgEAJgCIAUgGIAAgMQAAgGgEgDQgDgCgIAAQgLAAgIADIAAgOIAKgCIALgBQAbAAAAAZIAABCIgOAAIAAgHQgEAEgEACQgFABgEAAQgWAAAAgWgAgBAHQgGACgCACQgCADAAAFIAAAFQAAAFACADQADADAGAAQAGAAAHgFIAAgbg");
	this.shape_62.setTransform(34.1,-24.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_63.setTransform(29.2,-25.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgZA6IAAhyIAOAAIAAAEQAJgFAHAAQAKAAAGAGQADACABAEQACAEAAAFIAAAuQAAAGgCAEQgBAFgEADQgGAGgLAAIgOAAIAAAYgAgLgnIAAA7IALAAQAMAAAAgMIAAgpQgBgFgCgCQgDgDgEAAQgGAAgHAEg");
	this.shape_64.setTransform(23.9,-23.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgSAoQgIgGABgNIAAgqQAAgFABgFQACgFADgDQADgDAFgCQAGgCAFAAQAOAAAGAHIAFAIQACAFAAAFIAAAcIgmAAIAAAOQAAAGAEADQAEADAHAAQAKAAAKgDIAAAOQgKADgLAAQgNAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgFAAgDADg");
	this.shape_65.setTransform(16.8,-24.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRAuIAAhaIAPAAIAAAGIABgBIABgBIABgBIABgBIACgBIACAAIABgBIACAAIAFgBIAEAAIAAAPIgFAAQgIAAgHAGIAABGg");
	this.shape_66.setTransform(11.4,-24.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSAoQgHgGAAgNIAAgqQgBgFACgFQACgFADgDQADgDAGgCQAEgCAGAAQANAAAHAHIAFAIQABAFABAFIAAAcIgmAAIAAAOQAAAGAEADQAEADAHAAQAKAAAKgDIAAAOQgKADgLAAQgNAAgIgHgAgIgeQgDADAAAGIAAARIAXAAIAAgRQAAgMgMAAQgEAAgEADg");
	this.shape_67.setTransform(2.2,-24.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgRAuIAAhaIAPAAIAAAGIABgBIABgBIABgBIABgBIACgBIACAAIABgBIACAAIAFgBIAEAAIAAAPIgFAAQgIAAgHAGIAABGg");
	this.shape_68.setTransform(-3.3,-24.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIADgHQAFgEALgCIASgGIAAgMQAAgGgCgDQgEgCgJAAQgKAAgJADIAAgOIALgCIALgBQAbAAAAAZIAABCIgPAAIAAgHQgDAEgFACQgEABgEAAQgWAAAAgWgAgBAHQgGACgCACQgCADAAAFIAAAFQAAAFADADQACADAGAAQAHAAAFgFIAAgbg");
	this.shape_69.setTransform(-9.7,-24.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AALAtIgLhGIgJBGIgTAAIgRhaIAQAAIALBJIAMhJIANAAIANBKIALhKIAPAAIgQBag");
	this.shape_70.setTransform(-17.8,-24.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNA4QgEgBgDgDQgDgDgCgEIgBgKIAAgqQAAgMAHgHQAHgGAMgBIALAAIAAgYIAPAAIAAByIgOAAIAAgFQgHAGgJAAQgFAAgEgCgAgIgQQgDADAAAGIAAApQAAALALgBQAGAAAFgEIAAg7IgLAAQgEAAgEADg");
	this.shape_71.setTransform(-26.2,-25.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRAuIAAhaIAPAAIAAAGIABgBIABgBIABgBIABgBIACgBIACAAIABgBIACAAIAFgBIAEAAIAAAPIgFAAQgIAAgHAGIAABGg");
	this.shape_72.setTransform(-31.7,-24.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgaAYIAAgFIABgIIAEgHQAEgEAKgCIAUgGIAAgMQgBgGgDgDQgDgCgIAAQgLAAgIADIAAgOIAKgCIALgBQAbAAAAAZIAABCIgOAAIAAgHQgEAEgEACQgFABgEAAQgWAAAAgWgAAAAHQgHACgCACQgCADAAAFIAAAFQAAAFACADQADADAGAAQAGAAAHgFIAAgbg");
	this.shape_73.setTransform(-38.1,-24.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AALA6IAAhDQAAgKgJAAQgGAAgGAEIAABJIgPAAIAAhzIAPAAIAAAcIAIgDIAHgBQAKAAAFAGQADACACAEQABAEAAAFIAABGg");
	this.shape_74.setTransform(-44.9,-25.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgRAuIAAhaIAPAAIAAAGIABgBIABgBIABgBIABgBIACgBIACAAIABgBIACAAIAFgBIAEAAIAAAPIgFAAQgIAAgHAGIAABGg");
	this.shape_75.setTransform(-53.5,-24.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgUAoIgEgHQgCgEABgGIAAhEIAPAAIAABCQAAAGADACQACADAFAAQAFAAAGgEIAAhJIAQAAIAABaIgPAAIAAgEIgJADQgDACgEAAQgKAAgGgGg");
	this.shape_76.setTransform(-59.9,-24.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLAtQgFgCgDgCQgHgIAAgLIAAgrQAAgFACgFQABgFAEgDQADgDAFgDQAFgBAGAAQANAAAHAHQADADACAFQACAFAAAFIAAArQAAALgHAIQgEACgFACQgFACgGAAQgGAAgFgCgAgIgeQgDADAAAHIAAAqQAAAGADADQADADAFAAQAFAAAEgDQADgDAAgGIAAgqQAAgNgMAAQgFAAgDADg");
	this.shape_77.setTransform(-67.1,-24.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AALA6IAAhDQAAgKgJAAQgGAAgGAEIAABJIgPAAIAAhzIAPAAIAAAcIAIgDIAHgBQAKAAAFAGQADACACAEQABAEAAAFIAABGg");
	this.shape_78.setTransform(-74.2,-25.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_79.setTransform(-79.8,-25.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AACA2IAAhaIgSAOIAAgRIASgOIAPAAIAABrg");
	this.shape_80.setTransform(-84.6,-25.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_81.setTransform(-91.4,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-38.6,257.5,69.4);


// stage content:
(lib.DEDSept2016ProsNoOneCan728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_324 = function() {
		this.stop();
		this.button.stop();
		
		this.make_hover.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.button.gotoAndPlay("btn_hover")
		}
		
		this.make_hover.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler()
		{
			this.button.gotoAndPlay("btn_static")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(324).call(this.frame_324).wait(1));

	// Stop Banner
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4C8CE").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(325));

	// Hidden btn
	this.make_hover = new lib.btn_rollover();
	this.make_hover.parent = this;
	this.make_hover.setTransform(365.7,45.1,2.427,0.36,0,0,0,0.2,0.1);
	this.make_hover.alpha = 0.012;
	this.make_hover.compositeOperation = "lighter";
	new cjs.ButtonHelper(this.make_hover, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.make_hover).wait(325));

	// Button
	this.button = new lib.ButtonLearnMore();
	this.button.parent = this;
	this.button.setTransform(553.8,169.5,1,1,0,0,0,149.8,123.5);
	this.button._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button).wait(301).to({_off:false},0).wait(24));

	// Text Box 4
	this.instance = new lib.TextBox4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28.9,-67.9,0.706,0.706,0,0,0,0.6,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).wait(1).to({regX:15.2,regY:-7.1,x:59.9,y:-52.3},0).wait(1).to({x:77.8,y:-34.4},0).wait(1).to({x:92.6,y:-19.5},0).wait(1).to({x:104.1,y:-8.1},0).wait(1).to({x:111.4,y:-0.8},0).wait(1).to({regX:0.6,regY:0.1,x:103.5,y:6.7},0).wait(32).to({startPosition:0},0).wait(1));

	// Bullets
	this.instance_1 = new lib.Bullets("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(429.5,87.7,1,1,0,0,0,96,38.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).wait(1).to({regX:1.1,regY:-4,x:323.9,y:45.1,alpha:0.281},0).wait(1).to({x:314.7,alpha:0.523},0).wait(1).to({x:307.2,alpha:0.721},0).wait(1).to({x:301.4,alpha:0.873},0).wait(1).to({x:297.8,alpha:0.969},0).wait(1).to({regX:96,regY:38.6,x:391.5,y:87.7,alpha:1},0).wait(79).to({startPosition:0},0).wait(1).to({regX:1.1,regY:-4,x:307.3,y:45.1,alpha:0.719},0).wait(1).to({x:316.5,alpha:0.477},0).wait(1).to({x:324,alpha:0.279},0).wait(1).to({x:329.8,alpha:0.127},0).wait(1).to({x:333.4,alpha:0.031},0).wait(1).to({regX:96,regY:38.6,x:429.5,y:87.7,alpha:0},0).to({_off:true},1).wait(45));

	// Text Box 3
	this.instance_2 = new lib.TextBox3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-268.6,-268.6,0.706,0.706,0,0,0,-263.4,-186);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).wait(1).to({regX:0.2,regY:0.2,x:-61.4,y:-116.1},0).wait(1).to({x:-43.3,y:-98},0).wait(1).to({x:-28.4,y:-83.1},0).wait(1).to({x:-17.1,y:-71.7},0).wait(1).to({x:-9.9,y:-64.5},0).wait(1).to({regX:-263.4,regY:-186,x:-193.6,y:-193.7},0).wait(91).to({startPosition:0},0).wait(1).to({regX:0.2,regY:0.2,x:-28.6,y:-83.3},0).wait(1).to({x:-46.7,y:-101.4},0).wait(1).to({x:-61.6,y:-116.3},0).wait(1).to({x:-73,y:-127.6},0).wait(1).to({x:-80.2,y:-134.8},0).wait(1).to({regX:-263.4,regY:-186,x:-268.6,y:-268.6},0).to({_off:true},1).wait(45));

	// Text Box 2
	this.instance_3 = new lib.TextBox2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(221.3,66.3,0.706,0.706,0,0,0,-222.5,195.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).wait(1).to({regX:72.9,regY:-39.6,x:409.6,y:-79.4},0).wait(1).to({x:392,y:-61.9},0).wait(1).to({x:377.5,y:-47.3},0).wait(1).to({x:366.3,y:-36.1},0).wait(1).to({x:359.1,y:-28.9},0).wait(1).to({regX:-222.5,regY:195.5,x:148.3,y:139.3},0).wait(78).to({startPosition:0},0).wait(1).to({regX:72.9,regY:-39.6,x:377.3,y:-47.1},0).wait(1).to({x:394.9,y:-64.8},0).wait(1).to({x:409.5,y:-79.3},0).wait(1).to({x:420.5,y:-90.3},0).wait(1).to({x:427.5,y:-97.4},0).wait(1).to({regX:-222.5,regY:195.5,x:221.3,y:66.3},0).to({_off:true},1).wait(145));

	// Text Box 1
	this.instance_4 = new lib.TextBox1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(208.1,28.2,0.706,0.706,0,0,0,246.2,-190.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-53.8,regY:-7.8,x:17.1,y:136},0).wait(1).to({x:35.2,y:118},0).wait(1).to({x:50.2,y:103},0).wait(1).to({x:61.7,y:91.5},0).wait(1).to({x:69.1,y:84},0).wait(1).to({regX:246.2,regY:-190.1,x:283.3,y:-47},0).wait(83).to({startPosition:0},0).wait(1).to({regX:-53.8,regY:-7.8,x:50.4,y:102.8},0).wait(1).to({x:32.2,y:121},0).wait(1).to({x:17.2,y:135.9},0).wait(1).to({x:5.9,y:147.3},0).wait(1).to({x:-1.4,y:154.5},0).wait(1).to({regX:246.2,regY:-190.1,x:208.1,y:28.2},0).to({_off:true},1).wait(229));

	// RS Logo
	this.instance_5 = new lib.RSLogo("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(659,45,1.156,1.155);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(324).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230.7,44,862.3,224.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;