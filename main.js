document.getElementById("catchMe").addEventListener("mouseover",mouseOver);
function mouseOver(){
    document.getElementById("catchMe").style.left = Math.floor(Math.random() * 90) + "rem";
    document.getElementById("catchMe").style.top = Math.floor(Math.random() * 10) + "rem";
}