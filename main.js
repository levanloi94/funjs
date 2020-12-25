document.getElementById("catchMe").addEventListener("mouseover",mouseOver);
function mouseOver(){
    document.getElementById("catchMe").style.left = Math.floor(Math.random() * 500) + "px";
    document.getElementById("catchMe").style.top = Math.floor(Math.random() * 500) + "px";
}