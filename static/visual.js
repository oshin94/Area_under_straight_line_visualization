var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="white";

ctx.beginPath();
	ctx.strokeStyle="blue";
	ctx.moveTo(0,250);
	ctx.lineTo(500,250);
	ctx.stroke();

	ctx.moveTo(250,0);
	ctx.lineTo(250,500);
	ctx.stroke();
ctx.closePath();

ctx.fillStyle="black";
for (var j=0; j<500; j+=5){
	ctx.beginPath();
		ctx.strokeStyle="grey";
		ctx.lineWidth = 0.4;
		ctx.moveTo(j,0);
		ctx.lineTo(j,500);
		ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
		ctx.strokeStyle="grey";
		ctx.lineWidth = 0.4;
		ctx.moveTo(0,j);
		ctx.lineTo(500,j);
		ctx.stroke();
	ctx.closePath();
}


for (var i=0; i<500; i+=25){
	ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.lineWidth = 2;
		ctx.moveTo(i,245);
		ctx.lineTo(i,255);
		ctx.stroke();
		
		ctx.font = "10px Calibri";
		ctx.fillText(-250+i,i,246);

		ctx.moveTo(245,i);
		ctx.lineTo(255,i);
		ctx.stroke();
	
	
		ctx.font = "10px Calibri";
		ctx.fillText(250-i,258,i);
	ctx.closePath();
}

function Clear(){
	ctx.fillStyle="white";
		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 500);
		ctx.lineTo(500, 500);
		ctx.lineTo(500, 0);
		ctx.stroke();
		ctx.closePath();
	ctx.fill();

	ctx.beginPath();
		ctx.strokeStyle="blue";
		ctx.moveTo(0,250);
		ctx.lineTo(500,250);
		ctx.stroke();

		ctx.moveTo(250,0);
		ctx.lineTo(250,500);
		ctx.stroke();
	ctx.closePath();

	ctx.fillStyle="black";
	for (var j=0; j<500; j+=5){
		ctx.beginPath();
			ctx.strokeStyle="grey";
			ctx.lineWidth = 0.4;
			ctx.moveTo(j,0);
			ctx.lineTo(j,500);
			ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
			ctx.strokeStyle="grey";
			ctx.lineWidth = 0.4;
			ctx.moveTo(0,j);
			ctx.lineTo(500,j);
			ctx.stroke();
		ctx.closePath();
	}
	for (var i=0; i<500; i+=25){
		ctx.beginPath();
			ctx.strokeStyle="black";
			ctx.lineWidth = 2;
			ctx.moveTo(i,245);
			ctx.lineTo(i,255);
			ctx.stroke();
			
			ctx.font = "10px Calibri";
			ctx.fillText(-250+i,i,246);

			ctx.moveTo(245,i);
			ctx.lineTo(255,i);
			ctx.stroke();
		
		
			ctx.font = "10px Calibri";
			ctx.fillText(250-i,258,i);
		ctx.closePath();
	}
	var y = document.getElementById("another");
	y.style.display="none";
	var y = document.getElementById("mydiv");
	x1.value = '';
	x2.value = '';
	slope.value = '';
	intercept.value = '';
	y.style.display="none";
	slope.disabled = false;
	intercept.disabled = true;
	drawButton.disabled = true;
	
}


function Line(){
	var m = parseInt(document.getElementById("slope").value);
	var c = parseInt(document.getElementById("intercept").value);
	/* var x1 = parseInt(document.getElementById("x1").value);
	var x2 = parseInt(document.getElementById("x2").value); */
	
	/* y1 = m*x1+c;
	y2 = m*x2+c; */
	if (m == 0){
		lgy1 = 250-c;
		lgy2 = 250-c;
		
		lgx1 = 0;
		lgx2 = 500;
	}
	else{
		lgy1 = 250+300;
		lgy2 = 250-300;
	
		lx1 = (-300-c)/m;
		lx2 = (300-c)/m;
		
		lgx1 = 250+lx1;
		lgx2 = 250+lx2;
	}
	
	/* console.log(lgx1, lgy1);
	console.log(lgx2, lgy2); */
	
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(lgx1,lgy1);
	ctx.lineTo(lgx2,lgy2);
	ctx.stroke();
	ctx.closePath();
	
	var x = document.getElementById("mydiv");
	x.style.display = "block";
	
	slope.disabled = true;
	intercept.disabled= true;
	drawButton.disabled= true;
	findArea.disabled = false;
}

function Area(){
	var m = parseInt(document.getElementById("slope").value);
	var c = parseInt(document.getElementById("intercept").value);
	var x1 = parseInt(document.getElementById("x1").value);
	var x2 = parseInt(document.getElementById("x2").value);
	
	y1 = m*x1+c;
	y2 = m*x2+c;
	
	lgx1 = 250+x1;
	lgy1 = 250-y1;
	
	lgx2 = 250+x2;
	lgy2 = 250-y2;	
	
	ctx.beginPath();
	ctx.strokeStyle = 'pink';
	ctx.moveTo(lgx1, lgy1);
	ctx.lineTo(lgx1, lgy1+y1);
	ctx.stroke();
	
	ctx.moveTo(lgx2, lgy2);
	ctx.lineTo(lgx2, lgy2+y2);
	ctx.stroke();
	ctx.closePath();
	
	ctx.fillStyle = "yellow";
		ctx.beginPath();
		ctx.strokeStyle = 'pink';
		ctx.moveTo(lgx1, lgy1);
		ctx.lineTo(lgx1, lgy1+y1);
		ctx.lineTo(lgx2, lgy2+y2);
		ctx.lineTo(lgx2, lgy2);
		ctx.stroke();
		ctx.closePath();
	ctx.fill();
	
	console.log("x1: ", x1);
	console.log("x2: ", x2);
	console.log("slope: ", m);
	console.log("intercept: ", c);
	
	//ar = (m*(x2*x2)/2+c) - (m*(x1*x1)/2+c)
	ar = (((m*x2*x2)+2*c*x2)/2)-(((m*x1*x1)+2*c*x1)/2)
	var y = document.getElementById("ar");
	y.style.display="block";
	y.innerHTML = "The area is: "+ar;
	var y = document.getElementById("findAnother");
	y.style.display="block";
	var y = document.getElementById("another");
	y.style.display="block";
	x1.disabled = true;
	x2.disabled = true;
	findArea.disabled = true;
}

