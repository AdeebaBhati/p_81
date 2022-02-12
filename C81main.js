canvas=document.getElementById("mycanvas")
ctx=getContext("2D")
color="red";
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",mymousedown)

function mmymousedown(e){
    color=document.getElementById("color.value")
    mouse_x=e.clientX-canvas.offsetLeft
    mouse_y=e.clientY-canvas.offsetTop
    circle(mouse_x,mouse_y)
}
function circle(mouse_x,mouse_y){
    ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
}