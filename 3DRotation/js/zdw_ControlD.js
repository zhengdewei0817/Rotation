/**
 * 这里是控制div旋转以及其他的文档类
 */
var ZDWContoler = {
	initData: function(elem) {
		var Angle = 0;
		var MyTop = $(elem).css("top").split("px")[0];
		var MyLeft = $(elem).css("left").split("px")[0];
		var _x = 0;
		var _y = 0;
		var secendDiv = this.initView(elem)
		var threeDiv = this.initView(secendDiv);
		var RotationR = this.RotationR;
		var RotationL = this.RotationL;
		var UpMove = this.UpMove;
		var DownMove = this.DownMove;
		var LeftMove = this.LeftMove;
		var RightMove = this.RightMove;
		var FlipV = this.FlipV;
		var FlipH = this.FlipH;
		return {
			Angle: Angle,
			MyTop:MyTop,
			MyLeft:MyLeft,
			elem: elem,
			secendDiv:secendDiv,
			threeDiv:threeDiv,
			RotationR: RotationR,
			RotationL: RotationL,
			UpMove:UpMove,
			DownMove:DownMove,
			LeftMove:LeftMove,
			RightMove:RightMove,
			FlipV:FlipV,
			FlipH:FlipH,
			_x:_x,
			_y:_y,
		}
	},
	RotationR: function() {
		this.Angle += 1;
		var ang = this.Angle
		$(this.threeDiv).css({
			"transfrom": "rotate(" + ang + "deg)",
			"-ms-transform": "rotate(" + ang + "deg)",
			"-moz-transform": "rotate(" + ang + "deg)",
			"-webkit-transform": "rotate(" + ang + "deg)",
			"-o-transform": "rotate(" + ang + "deg)",
		})
	},
	RotationL: function() {
		this.Angle -= 1;
		var ang = this.Angle
		$(this.threeDiv).css({
			"transfrom": "rotate(" + ang + "deg)",
			"-ms-transform": "rotate(" + ang + "deg)",
			"-moz-transform": "rotate(" + ang + "deg)",
			"-webkit-transform": "rotate(" + ang + "deg)",
			"-o-transform": "rotate(" + ang + "deg)",
		})
	},
	UpMove:function(){
		this.MyTop-=1;
		var T = this.MyTop;
		$(this.elem).css("top",T+"px");
	},
	DownMove:function(){
		this.MyTop=Number(this.MyTop)+1;
		console.log(this.MyTop)
		var T = this.MyTop;
		$(this.elem).css("top",T+"px");
	},
	LeftMove:function(){
		this.MyLeft-=1;
		var L = this.MyLeft;
		$(this.elem).css("left",L+"px");
	},
	RightMove:function(){
		this.MyLeft+=1;
		var L = this.MyLeft;
		$(this.elem).css("left",L+"px");
	},
	initView: function(elem){
		var div = document.createElement("div");
		div.innerHTML = elem.innerHTML;
		elem.innerHTML = "";
		elem.appendChild(div)
		return div;
	},
	FlipV: function() {
		if(this._x==1){
			this._x = 0;
		}else{
			this._x = 1;
		}
		$(this.elem).css({
			"transfrom": "rotate3d("+this._x+","+0+",0," + 180 + "deg)",
			"-ms-transform": "rotate3d("+this._x+","+0+",0," + 180 + "deg)",
			"-moz-transform": "rotate3d("+this._x+","+0+",0," + 180 + "deg)",
			"-webkit-transform": "rotate3d("+this._x+","+0+",0," + 180 + "deg)",
			"-o-transform": "rotate3d("+this._x+","+0+",0," + 180 + "deg)",
		})
	},
	FlipH: function() {
		if(this._y==1){
			this._y = 0;
		}else{
			this._y = 1;
		}
		$(this.secendDiv).css({
			"transfrom": "rotate3d("+0+","+this._y+",0," + 180 + "deg)",
			"-ms-transform": "rotate3d("+0+","+this._y+",0," + 180 + "deg)",
			"-moz-transform": "rotate3d("+0+","+this._y+",0," + 180 + "deg)",
			"-webkit-transform": "rotate3d("+0+","+this._y+",0," + 180 + "deg)",
			"-o-transform": "rotate3d("+0+","+this._y+",0," + 180 + "deg)",
		})
	},
}