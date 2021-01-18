canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(250,200,40,0,2 * Math.PI);
ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(300,200,40,0,2 * Math.PI);
ctx.stroke();

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(225,250,40,0,2 * Math.PI);
ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(275,250,40,0,2 * Math.PI);
ctx.stroke();



