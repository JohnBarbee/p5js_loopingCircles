var maxD;
var minD;
var circles;
	
function setup() {
	createCanvas(400,400);
	
	minD = 4;
	maxD = 40;
	t = 0;
	circles = [];
	for(var ii = 0; ii < 8; ii++){
		for(var jj = 0; jj < 8;
			jj++){
		circles[jj + ii*8] =
			new Circle(
				lerp(40,360,ii/8),
				(jj/8 + ii/8),
				color(255,125,80),
				color(255,80,125));
		}
	}
}

function draw() {
	background(0);

	for(var j = 0; j < 8; j++){
		for(var i = 0; i < 8; i++){
			var index = j + i * 8;
			circles[index].Tick(
				millis());
			circles[index].Move();
			
		}
	}
}
