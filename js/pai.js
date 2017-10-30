function onPageLoad(){
	var canvasMain = document.getElementById('main_canvas');
	//console.log(canvasMain);
	var r=600.0;

	var offSetX=10.0;
	var offSetY=10.0;
	if (canvasMain.getContext) {
    	var ctx = canvasMain.getContext('2d');
	

	/*
	ctx.beginPath(); // 开始路径绘制
	ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
	ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
	ctx.lineWidth = 0.1; // 设置线宽
	ctx.strokeStyle = "#ff0000"; // 设置线的颜色
	ctx.stroke(); // 进行线的着色，这时整条线才变得可见
	*/

	
		ctx.beginPath();
	
		ctx.lineWidth = 1; // 设置线宽
		ctx.strokeStyle = "#000000"; // 设置线的颜色
		
		ctx.strokeRect(offSetX,offSetY,r,r);
	

		ctx.arc(offSetX, offSetY, r, 0, 0.5*Math.PI, false);
		ctx.stroke(); 

		shoot(ctx,r,10000000,offSetX, offSetY);
	}else{
		console.log("no canvasMain.Context");
	}
}


function shoot(ctx,r,iCount,offSetX,offSetY){

	var iInSideCircle=0;
	var iOutSideCircle=0;	

	for(var i=0;i<iCount;i++){

		
		var x=offSetX+Math.random()*r;
		var y=offSetY+Math.random()*r;
		//决定一个点

		//判断这个点在园里还是在圆外 画这个点
		ctx.beginPath();
		
		if( r < Math.sqrt((x-offSetX)*(x-offSetX)+(y-offSetY)*(y-offSetY))){
			//外边
			ctx.fillStyle = "#dd9222";
			iOutSideCircle++;
		}else{
			ctx.fillStyle = "#00ccff";
			iInSideCircle++;
		}

		ctx.arc(x, y, 1, 0, Math.PI*2, true); 
		ctx.fill();
		
	}


	ctx.beginPath();
	// 设置字体
	ctx.font = "Bold 20px Arial"; 
	// 设置对齐方式
	ctx.textAlign = "left";
	// 设置填充颜色
	ctx.fillStyle = "#008600"; 
	// 设置字体内容，以及在画布上的位置
	//ctx.strokeText("π="+iInSideCircle*4/(iOutSideCircle+iInSideCircle), 330, 100);
	ctx.fillText("π="+iInSideCircle*4/(iOutSideCircle+iInSideCircle), r*1.1+offSetX, 100); 
	





}



