(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"bannerzuelo_1920x400Responsive_atlas_", frames: [[0,402,1920,400],[0,804,1920,400],[652,1206,500,46],[0,1206,311,206],[313,1206,337,100],[0,0,1920,400]]}
];


// symbols:



(lib.botella = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Fondo = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.image = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.image_2 = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.image_3 = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.montanias = function() {
	this.spriteSheet = ss["bannerzuelo_1920x400Responsive_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image_3();
	this.instance.parent = this;
	this.instance.setTransform(-168.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-50,337,100);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiV/AfQMAAAg+fMEr/AAAMAAAA+fg");
	this.shape.setTransform(960,200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,206);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.image();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,46);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.botella();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,400);


// stage content:
(lib.bannerzuelo_1920x400Responsive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.zuelo.com.ar/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(265));

	// Layer 7
	this.button_1 = new lib.Symbol4();
	this.button_1.parent = this;
	this.button_1.setTransform(960,200,1,1,0,0,0,960,200);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(265));

	// Layer 6
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1208.5,166);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).to({alpha:1},15).wait(112).to({startPosition:0},0).to({alpha:0},20).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(832.5,180,1,1,0,0,0,155.5,103);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).to({alpha:1},17).wait(119).to({startPosition:0},0).to({alpha:0},20).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-256,92,1,1,0,0,0,250,23);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:1064},22).wait(58).to({startPosition:0},0).to({x:-276},20).to({_off:true},126).wait(21));

	// Fondo
	this.instance_3 = new lib.Fondo();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(265));

	// Botella
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(2132,202,1,1,0,0,0,960,200);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:552},22,cjs.Ease.get(1)).wait(58).to({x:912},0).to({x:2132},20).wait(147));

	// Montañas
	this.instance_5 = new lib.montanias();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,200,1920,400);
// library properties:
lib.properties = {
	width: 1920,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bannerzuelo_1920x400Responsive_atlas_.png?1523994178814", id:"bannerzuelo_1920x400Responsive_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;