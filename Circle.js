// NEW EMPTY FILE - 

function Circle(xoff, yoff,
	c1, c2){
	var x = xoff;
	var offset = yoff;
	var startColor = c1;
	var endColor = c2;
	
	this.Tick = function (time){
		tick = (time/1000) + offset;
		tick *= .9
		tick = tick % 2;
	}
	
	this.Move = function (){
		var targetPos;
		var size;
		if(tick < 1){
			targetPos = lerp(40, 360, 				this.Ease(tick));
			size = lerp(40,4,
				this.Ease(tick));
		}
		if(tick >= 1){
			targetPos = lerp(360,40,
				this.Ease(tick - 1));
			size = lerp(4,40,
				this.Ease(tick - 1));
		}
		size = sin((tick + 1.5)* PI * 0.5) * 36 + 4;
		this.Render(x,targetPos,size);
	}
	
	this.Render = function 					(posx,posy,d){
		fill(lerpColor(startColor,
				endColor,lerp(0,1,
				(posy - 40) / 320)));
		ellipse(posx,posy,d,d);
	}
	
	this.Ease = function (t) {
		return t<.5 ? 2*t*t : 
			-1+(4-2*t)*t
	}
}
